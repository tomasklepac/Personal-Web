export default function Contact() {
    return (
        <section id="contact" className="contact fade-in">
            <h2>Kontakt</h2>
            <p>Ozvi se mi přímo - na telefon nebo e-mail.</p>

            <div className="contact-links">
                <a href="mailto:info@tomasklepac.cz" className="contact-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                            strokeLinejoin="round" d="M4 6.5h16v11H4z" />
                        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                            strokeLinejoin="round" d="m4 8 8 5 8-5" />
                    </svg> <span>info@tomasklepac.cz</span>
                </a>
                <a href="tel:+420602393870" className="contact-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.5 4h2l1 4-2 1.5a11.5 11.5 0 0 0 6 6l1.5-2 4 1v2a2 2 0 0 1-2.2 2A13.5 13.5 0 0 1 4.5 7.7 2 2 0 0 1 6.5 4Z" />
                    </svg> <span>+420 602 393 870</span>
                </a>
                {/* PDF link adjusted to point to public assets */}
                <a href="/Smluvni_podminky.pdf" className="contact-link" target="_blank" rel="noopener"
                    aria-label="Otevřít smluvní podmínky (PDF)">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                            strokeLinejoin="round" d="M6 3.5h8l4 4v13H6z" />
                        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                            strokeLinejoin="round" d="M14 3.5v4h4" />
                        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                            strokeLinejoin="round" d="M8.5 14.5H12a1.5 1.5 0 0 0 0-3H9v6" />
                        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                            strokeLinejoin="round" d="M15 12h2" />
                        <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
                            strokeLinejoin="round" d="M16 10.5v3" />
                    </svg> <span>Smluvní podmínky (PDF)</span>
                </a>
            </div>

            {/* Links to social networks */}
            <ul className="social-icons fade-in">
                <li className="icon-content">
                    <a data-social="linkedin" href="https://www.linkedin.com/in/tomasklepac" target="_blank"
                        rel="noopener" aria-label="Otevřít profil na LinkedIn">
                        <div className="filled"></div>
                        {/* SVG icon for LinkedIn */}
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor"
                                d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.62-1.17 2.14-2.4 4.41-2.4 4.72 0 5.59 3.11 5.59 7.16V24h-5v-6.95c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.66 1.8-2.66 3.66V24h-5V8z" />
                        </svg>
                    </a>
                </li>

                <li className="icon-content">
                    <a data-social="github" href="https://github.com/tomasklepac" target="_blank" rel="noopener"
                        aria-label="Otevřít profil na GitHubu">
                        <div className="filled"></div>
                        {/* SVG icon for GitHub */}
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor"
                                d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.29-1.68-1.29-1.68-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.72 1.27 3.39.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.22 1.18a11.2 11.2 0 0 1 5.86 0c2.24-1.49 3.22-1.18 3.22-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.39-5.25 5.67.42.36.8 1.06.8 2.15v3.18c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </section>
    );
}
