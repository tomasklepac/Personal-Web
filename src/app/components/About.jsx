import Image from 'next/image';
import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiPhp,
    SiMysql,
    SiPython,
    SiCss3,
    SiGit,
} from 'react-icons/si';

// Official brand colors of each technology
const skills = [
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'CSS', Icon: SiCss3, color: '#1572B6' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
];

export default function About() {
    return (
        <section id="about" className="about fade-in">
            <div className="about-container">
                <div className="about-text">
                    <h2>O&nbsp;mně</h2>
                    <p>
                        Jmenuju se <strong>Tomáš Klepač</strong> a jsem webový vývojář z Plzně.
                        Baví mě propojovat čistý design s funkčním kódem - aby weby nejen vypadaly dobře,
                        ale i fungovaly rychle a intuitivně.
                    </p>
                    <p>
                        Vystudoval jsem <strong>počítačové vědy na Fakultě aplikovaných věd Západočeské
                            univerzity</strong> a aktuálně pokračuji v navazujícím studiu se zaměřením na
                        <strong> zpracování přirozeného jazyka</strong>.
                        Nejvíc se učím praxí - tvorbou vlastních projektů od malých webů po větší aplikace.
                    </p>

                    <div className="skill-tags">
                        {skills.map(({ name, Icon, color }) => (
                            <span
                                key={name}
                                className="skill-icon"
                                style={{ color }}
                                role="img"
                                aria-label={name}
                                title={name}
                            >
                                <Icon aria-hidden="true" />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Developer photo */}
                <div className="about-photo">
                    <div className="profile-image-container">
                        <Image
                            src="/assets/images/profile-300.webp"
                            alt="Tomáš Klepač - Web Developer"
                            fill
                            sizes="(max-width: 768px) 100vw, 300px"
                            style={{ objectFit: 'cover' }}
                            priority
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
