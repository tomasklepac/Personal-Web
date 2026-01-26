import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
    return (
        <section className="hero">
            <ParticlesBackground id="tsparticles-hero" />
            <div className="hero-overlay"></div>

            {/* Visual Depth Orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>

            <div className="hero-content">
                <h1>Ahoj, jsem <span className="highlight-text">Tomáš Klepač</span></h1>

                <div className="typing-container">
                    <TypeAnimation
                        sequence={[
                            'Tvořím moderní weby',
                            2000,
                            'Tvořím aplikace na míru',
                            2000,
                            'Tvořím digitální zážitky',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1.5em', display: 'inline-block', color: '#ccc' }}
                        repeat={Infinity}
                    />
                </div>

                <p className="hero-subtitle">Freelance Web Developer z Plzně</p>

                <div className="cta-container">
                    <a href="#portfolio" className="btn btn-primary">Zobrazit projekty</a>
                    <a href="#contact" className="btn btn-outline">Kontaktovat</a>
                </div>

                <div className="social-links">
                    <a href="https://github.com/tomasklepac" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/tomasklepac" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:email@example.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            <div className="status-badge">
                <span className="status-dot"></span>
                Přijímám nové projekty
            </div>

            <a href="#about" className="scroll-indicator" aria-label="Posunout dolů">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </section>
    );
}
