'use client';

import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { useState } from 'react';

export default function HamburgerMenu({ isOpen, toggleMenu }) {
    // Defines the circular reveal animation
    const menuVariants = {
        closed: {
            clipPath: "circle(0px at calc(100% - 45px) 45px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                delay: 0.2 // Wait for items to fade out
            }
        },
        open: {
            clipPath: "circle(3000px at calc(100% - 45px) 45px)",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }
    };

    const containerVariants = {
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { y: 50, opacity: 0 },
        open: { y: 0, opacity: 1 }
    };

    const links = [
        { name: 'O mně', href: '#about' },
        { name: 'Služby', href: '#services' },
        { name: 'Ceník', href: '#pricing' },
        { name: 'Proces', href: '#workflow' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Kontakt', href: '#contact' }
    ];

    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <motion.div
            className="mobile-menu-overlay"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            style={{ pointerEvents: isOpen ? "auto" : "none" }} // Prevent clicks when closed
        >
            {/* Background Layer with Particles */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.3, zIndex: 0 }}>
                <ParticlesBackground id="tsparticles-menu" />
            </div>

            <nav className="mobile-nav" style={{ position: 'relative', zIndex: 1 }}>
                <motion.ul
                    variants={containerVariants}
                    style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2vh' }}
                >
                    {links.map((link) => (
                        <motion.li key={link.name} variants={linkVariants}>
                            <a
                                href={link.href}
                                className="wow-link"
                                onClick={toggleMenu}
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                                style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    color: hoveredLink && hoveredLink !== link.name ? 'rgba(255,255,255,0.2)' : '#fff',
                                    transition: 'color 0.3s ease',
                                    position: 'relative',
                                    display: 'inline-block'
                                }}
                            >
                                {link.name}
                                {hoveredLink === link.name && (
                                    <motion.span
                                        layoutId="underline"
                                        style={{
                                            position: 'absolute',
                                            bottom: -5,
                                            left: 0,
                                            width: '100%',
                                            height: '4px',
                                            background: '#1f8ef1',
                                            borderRadius: '2px'
                                        }}
                                    />
                                )}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>
        </motion.div>
    );
}
