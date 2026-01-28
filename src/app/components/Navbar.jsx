'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent scrolling when menu is open
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <a href="#" className="logo">
                    <Image
                        src="/assets/images/logo_clear.webp"
                        alt="Tomáš Klepač - Web Developer Logo"
                        width={42}
                        height={42}
                        priority
                        style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
                    />
                </a>

                {/* Desktop Navigation */}
                <ul className="nav-links desktop-only">
                    <li><a href="#about">O mně</a></li>
                    <li><a href="#services">Služby</a></li>
                    <li><a href="#pricing">Ceník</a></li>
                    <li><a href="#workflow">Proces</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact" className="contact-link">Kontakt</a></li>
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    className="hamburger-btn mobile-only"
                    onClick={toggleMenu}
                    aria-label="Menu"
                    aria-expanded={isOpen}
                >
                    <motion.div
                        animate={isOpen ? "open" : "closed"}
                        className="hamburger-icon"
                    >
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 8 }
                            }}
                            className="line line-1"
                        />
                        <motion.span
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            className="line line-2"
                        />
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -8 }
                            }}
                            className="line line-3"
                        />
                    </motion.div>
                </button>
            </nav>

            <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
}
