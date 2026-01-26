'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function HamburgerMenu({ isOpen, toggleMenu }) {
    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    const links = [
        { name: 'O mně', href: '#about' },
        { name: 'Služby', href: '#services' },
        { name: 'Ceník', href: '#pricing' },
        { name: 'Proces', href: '#workflow' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Kontakt', href: '#contact' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="mobile-menu-overlay"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                >
                    <nav className="mobile-nav">
                        {links.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                variants={linkVariants}
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
