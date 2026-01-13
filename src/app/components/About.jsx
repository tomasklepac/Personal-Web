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
                        Jsem student <strong>počítačových věd na Fakultě aplikovaných věd Západočeské
                            univerzity</strong>,
                        kde se zaměřuji na programování a vývoj aplikací.
                        Nejvíc se učím praxí - tvorbou vlastních projektů od malých webů po větší aplikace.
                    </p>
                </div>

                {/* Developer photo */}
                <div className="about-photo">
                    <picture>
                        <source srcSet="/assets/images/profile.webp" type="image/webp" />
                        <source srcSet="/assets/images/profile-900.jpg" type="image/jpeg" />
                        <Image
                            src="/assets/images/profile-900.jpg"
                            alt="Tomáš Klepač - Web Developer"
                            loading="lazy"
                            width={300}
                            height={300}
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
