export default function Pricing() {
    return (
        <section id="pricing" className="pricing fade-in">
            <h2>Ceník</h2>
            <p className="pricing-intro">
                Uvedené ceny jsou orientační. Finální cena se odvíjí od rozsahu, funkcionality a náročnosti projektu.
            </p>

            <div className="pricing-cards">
                {/* Option 1 */}
                <div className="pricing-card">
                    <h3>Základní web</h3>
                    <p className="price">8 000 - 10 000 Kč</p>
                    <ul>
                        <li>1-3 podstránky</li>
                        <li>Statický prezentační web</li>
                        <li>Responzivní design (mobil / tablet / desktop)</li>
                        <li>Základní SEO nastavení</li>
                        <li>Kontaktní formulář</li>
                        <li>Vhodné pro OSVČ, služby, menší projekty nebo portfolio</li>
                        <li className="pricing-limitation">Bez databáze, bez administrace</li>
                    </ul>
                </div>

                {/* Option 2 */}
                <div className="pricing-card">
                    <h3>Rozšířený web</h3>
                    <p className="price">10 000 - 15 000 Kč</p>
                    <ul>
                        <li>4 a více podstránek</li>
                        <li>Částečně dynamický obsah</li>
                        <li>Možnost správy textů, galerií nebo obsahu</li>
                        <li>Formuláře, mapy, napojení na externí služby</li>
                        <li>Lepší struktura webu a UX</li>
                        <li>Vhodné pro firmy, které web aktivně používají</li>
                    </ul>
                </div>

                {/* Option 3 */}
                <div className="pricing-card">
                    <h3>Webová aplikace / systém na míru</h3>
                    <p className="price">15 000 - 20 000 Kč+</p>
                    <ul>
                        <li>Webová aplikace na míru</li>
                        <li>Databáze a práce s daty</li>
                        <li>Přihlášení uživatelů a administrační rozhraní</li>
                        <li>Rezervační nebo objednávkový systém</li>
                        <li>Interní nástroje nebo jednoduché systémy</li>
                        <li>MVP řešení pro konkrétní potřebu klienta</li>
                        <li className="pricing-limitation">Nejde o plnohodnotný e-shop</li>
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
