import Image from 'next/image';

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio fade-in">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {/* Project 1 */}
                <div className="portfolio-card">
                    <div className="portfolio-image">
                        <Image
                            src="/assets/images/re-moveharmony-new.png"
                            alt="Re-Move Harmony"
                            width={600}
                            height={400}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="portfolio-content">
                        <h3>Re-Move Harmony</h3>
                        <div className="portfolio-tags">
                            <span className="portfolio-tag">Next.js</span>
                            <span className="portfolio-tag">React</span>
                            <span className="portfolio-tag">CSS</span>
                        </div>
                        <a href="https://re-moveharmony.cz" target="_blank" className="btn">Přejít na stránku</a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="portfolio-card">
                    <div className="portfolio-image">
                        <Image
                            src="/assets/images/apartmany-sumava.png"
                            alt="Apartmány Šumava"
                            width={600}
                            height={400}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="portfolio-content">
                        <h3>Apartmány Šumava</h3>
                        <div className="portfolio-tags">
                            <span className="portfolio-tag">Next.js</span>
                            <span className="portfolio-tag">React</span>
                            <span className="portfolio-tag">CSS</span>
                        </div>
                        <a href="https://sumava-apartmany.cz/" target="_blank" className="btn">Přejít na stránku</a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="portfolio-card">
                    <div className="portfolio-image">
                        <Image
                            src="/assets/images/cestujsbobikem.png"
                            alt="Cestuj s Bobíkem"
                            width={600}
                            height={400}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="portfolio-content">
                        <h3>Cestuj s Bobíkem</h3>
                        <div className="portfolio-tags">
                            <span className="portfolio-tag">Next.js</span>
                            <span className="portfolio-tag">React</span>
                            <span className="portfolio-tag">CSS</span>
                        </div>
                        <a href="https://cestujsbobikem.cz" target="_blank" className="btn">Přejít na stránku</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
