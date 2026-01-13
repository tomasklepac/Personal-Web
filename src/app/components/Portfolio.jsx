import Image from 'next/image';

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio fade-in">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {/* Project 1 */}
                <div className="portfolio-card">
                    <div className="card-image">
                        <Image
                            src="/assets/images/re-moveharmony.jpg"
                            alt="Re-Move Harmony"
                            width={400}
                            height={250}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <h3>Re-Move Harmony</h3>
                    <a href="https://re-moveharmony.cz" target="_blank" className="btn">Přejít na stránku</a>
                </div>
            </div>
        </section>
    );
}
