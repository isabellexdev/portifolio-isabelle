'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <a href="#" className={styles.logo}>
          I<span> S</span>
        </a>

        {/* Nav Desktop */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className={styles.ctaButton}>
            Fale comigo
          </a>
        </nav>

        {/* Menu Mobile */}
        <button
          className={styles.menuButton}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Nav Mobile */}
      {mobileOpen && (
        <div className="container">
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}