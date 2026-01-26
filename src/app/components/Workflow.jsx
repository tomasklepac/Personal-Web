export default function Workflow() {
    return (
        <section id="workflow" className="workflow fade-in">
            <h2>Proces výroby</h2>
            <p className="workflow-intro">Od prvního nápadu až po spuštění webu - vše má jasný postup.</p>

            <div className="steps">
                <div className="step">
                    <div className="icon" aria-hidden="true">
                        {/* MessageSquareText */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            <path d="M13 8H7" />
                            <path d="M17 12H7" />
                        </svg>
                    </div>
                    <h3>Konzultace</h3>
                    <p>Probereme cíle a představy, abych mohl navrhnout řešení na míru.</p>
                </div>

                <div className="step">
                    <div className="icon" aria-hidden="true">
                        {/* PencilRuler */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 19 7-7 3 3-7 7-3-3z" />
                            <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                            <path d="m2 2 7.586 7.586" />
                            <circle cx="11" cy="11" r="2" />
                        </svg>
                    </div>
                    <h3>Návrh</h3>
                    <p>Vytvořím strukturu a design, který sedí vašemu stylu a značce.</p>
                </div>

                <div className="step">
                    <div className="icon" aria-hidden="true">
                        {/* Code2 */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m18 16 4-4-4-4" />
                            <path d="m6 8-4 4 4 4" />
                            <path d="m14.5 4-5 16" />
                        </svg>
                    </div>
                    <h3>Vývoj</h3>
                    <p>Web kóduju ručně - čistě, rychle a responzivně, bez zbytečných šablon.</p>
                </div>

                <div className="step">
                    <div className="icon" aria-hidden="true">
                        {/* Rocket */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                            <path
                                d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                        </svg>
                    </div>
                    <h3>Spuštění</h3>
                    <p>Zařídím hosting, nasazení, zabezpečení i optimalizaci výkonu.</p>
                </div>
            </div>
        </section>
    );
}
