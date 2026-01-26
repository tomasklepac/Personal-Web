export default function Services() {
    return (
        <section id="services" className="services fade-in">
            <h2>Co nabízím</h2>
            <div className="service-cards">
                {/* Card 1 */}
                <div className="card">
                    <div className="icon" aria-hidden="true">
                        {/* MonitorSmartphone */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                            <path d="M10 19v-3.96 3.15" />
                            <path d="M7 19h5" />
                            <rect width="6" height="10" x="16" y="12" rx="2" />
                        </svg>
                    </div>
                    <h3>Tvorba webu</h3>
                    <p>Moderní web od návrhu po spuštění. Rychlý, přehledný a přizpůsobený vašim potřebám.</p>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <div className="icon" aria-hidden="true">
                        {/* ServerCog */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
                            <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
                            <path d="M6 6h.01" />
                            <path d="M6 18h.01" />
                        </svg>
                    </div>
                    <h3>Hosting & Správa</h3>
                    <p>Postarám se o hosting, údržbu a pravidelné aktualizace, aby web běžel bez problémů.</p>
                </div>

                {/* Card 3 */}
                <div className="card">
                    <div className="icon" aria-hidden="true">
                        {/* TrendingUp */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                        </svg>
                    </div>
                    <h3>SEO & Indexace</h3>
                    <p>Optimalizace pro vyhledávače - meta tagy, struktura, indexace pro lepší viditelnost.</p>
                </div>
            </div>
        </section>
    );
}
