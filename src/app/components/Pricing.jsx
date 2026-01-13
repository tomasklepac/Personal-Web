export default function Pricing() {
    return (
        <section id="pricing" className="pricing fade-in">
            <h2>Ceník</h2>
            <p className="pricing-intro">
                Každý web dělám na míru. Níže najdeš orientační přehled běžných typů webů.
            </p>

            <div className="pricing-cards">
                {/* Option 1 */}
                <div className="pricing-card">
                    <h3>Jednoduchý web</h3>
                    <p className="price">od 2 000 Kč</p>
                    <ul>
                        <li>1-3 podstránky</li>
                        <li>Statický obsah bez databáze</li>
                        <li>Informační web (prezentace, kontakty, nabídka služeb)</li>
                        <li>Vhodné pro osobní web, malý podnik, portfolio</li>
                    </ul>
                </div>

                {/* Option 2 */}
                <div className="pricing-card">
                    <h3>Rozšířený web</h3>
                    <p className="price">od 4 000 Kč</p>
                    <ul>
                        <li>4+ podstránek</li>
                        <li>Dynamický obsah (např. správa textů, galerií)</li>
                        <li>Napojení na externí služby (mapy, formuláře)</li>
                        <li>Pro menší firmy s častějšími aktualizacemi</li>
                    </ul>
                </div>

                {/* Option 3 */}
                <div className="pricing-card">
                    <h3>Webová aplikace / e-shop</h3>
                    <p className="price">od 7 000 Kč</p>
                    <ul>
                        <li>Přihlášení uživatelů a databáze dat</li>
                        <li>Rezervační či objednávkový systém</li>
                        <li>Admin rozhraní pro správu dat</li>
                        <li>Vhodné pro e-shopy nebo interní systémy</li>
                    </ul>
                </div>
            </div>

            <p className="pricing-note">
                Finální cenu stanovím po krátké domluvě - nezávazně a zdarma.
                Záleží hlavně na funkcích, rozsahu a grafických požadavcích.
            </p>
        </section>
    );
}
