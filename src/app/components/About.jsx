import Image from 'next/image';

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
                        {['React', 'Next.js', 'JavaScript', 'TypeScript', 'PHP', 'MySQL', 'Python', 'CSS', 'Git'].map(skill => (
                            <span key={skill} className="skill-tag">{skill}</span>
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
