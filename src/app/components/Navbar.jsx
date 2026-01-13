'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Sync with body scroll lock if needed, or aria attributes
    useEffect(() => {
        // Logic from original main.js to handle aria attributes can be simplified here or added if strictly needed
    }, [isMenuOpen]);

    return (
        <header>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="logo">
                    <picture>
                        <source srcSet="/assets/images/logo_clear.webp" type="image/webp" />
                        <source srcSet="/assets/images/logo_clear-256.png" type="image/png" />
                        <Image
                            src="/assets/images/logo_clear-256.png"
                            alt="Tomáš Klepač - logo"
                            width={42}
                            height={42}
                            loading="lazy"
                        />
                    </picture>
                </div>

                {/* Checkbox hack replaced by React state */}
                <input
                    type="checkbox"
                    id="menu-toggle"
                    aria-hidden="true"
                    checked={isMenuOpen}
                    onChange={toggleMenu}
                />
                <label
                    htmlFor="menu-toggle"
                    className="menu-icon"
                    role="button"
                    aria-label={isMenuOpen ? "Zavřít navigaci" : "Otevřít navigaci"}
                    aria-controls="primary-nav"
                    aria-expanded={isMenuOpen}
                    tabIndex="0"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleMenu();
                        }
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                {/* Navigation links */}
                <ul className="nav-links" id="primary-nav" aria-hidden={!isMenuOpen && typeof window !== 'undefined' && window.innerWidth < 900}>
                    <li><a href="#about" onClick={closeMenu}>O mně</a></li>
                    <li><a href="#services" onClick={closeMenu}>Služby</a></li>
                    <li><a href="#pricing" onClick={closeMenu}>Ceník</a></li>
                    <li><a href="#workflow" onClick={closeMenu}>Proces</a></li>
                    <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
}
