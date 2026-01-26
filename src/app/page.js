'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Workflow from './components/Workflow';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {

  // Re-implementing the IntersectionObserver logic from main.js (lines 2-14)
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    // Safety check if IntersectionObserver is supported (it is in all modern browsers)
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, { threshold: 0.1 }); // Reduced threshold slightly for better reactivity

      fadeElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Přeskočit na hlavní obsah</a>
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Workflow />
        <Portfolio />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}
