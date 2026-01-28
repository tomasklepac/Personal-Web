'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

// Lazy load below-the-fold components for better performance
const Services = dynamic(() => import('./components/Services'), {
  loading: () => null,
});
const Pricing = dynamic(() => import('./components/Pricing'), {
  loading: () => null,
});
const Workflow = dynamic(() => import('./components/Workflow'), {
  loading: () => null,
});
const Portfolio = dynamic(() => import('./components/Portfolio'), {
  loading: () => null,
});
const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => null,
});
const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => null,
});
const ScrollToTop = dynamic(() => import('./components/ScrollToTop'), {
  loading: () => null,
});

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
