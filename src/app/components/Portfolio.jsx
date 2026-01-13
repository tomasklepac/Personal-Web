import Image from 'next/image';

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio fade-in">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                <div className="portfolio-feature">
                    <div className="feature-media">
                        <picture>
                            <source srcSet="/assets/images/re-moveharmony.webp" type="image/webp" />
                            <source srcSet="/assets/images/re-moveharmony.jpg" type="image/jpeg" />
                            <Image
                                src="/assets/images/re-moveharmony.jpg"
                                alt="Re-Move Harmony — klinika pro masáže a pohybové terapie"
                                loading="lazy"
                                width={1200}
                                height={666}
                            />
                        </picture>
                        <div className="feature-overlay">
                            <span className="feature-badge">Re-Move Harmony</span>
                            <div className="feature-tags">
                                <span className="tag">Masáže</span>
                                <span className="tag">Pohybové terapie</span>
                                <span className="tag">Rezervace</span>
                            </div>
                        </div>
                    </div>
                    <div className="feature-content">
                        <p className="feature-meta">Klinika pro masáže a pohybové terapie</p>
                        <h3>Re-Move Harmony</h3>
                        <p className="feature-text">Vícestránkový web pro kliniku: hlavní stránka, přehled služeb,
                            fotogalerie, tým a kontakt s online rezervacemi.</p>
                        <div className="feature-actions">
                            <a href="https://re-moveharmony.cz" target="_blank" className="btn">Přejít na stránku</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
