export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Ahoj, jsem <span>Tomáš Klepač</span></h1>
                <p>Tvořím moderní a rychlé weby pro freelancery a malé firmy.</p>
                <a href="#portfolio" className="btn">Zobrazit projekty</a>
            </div>
            <div className="scroll-down"><span></span></div>
        </section>
    );
}
