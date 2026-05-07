import { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const useSolidNavbar = true;

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${useSolidNavbar ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo">
          <img src={logo} alt="SMK Logo" className="navbar__logo-icon" />
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__link">{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="tel:+919876543210" className="navbar__cta btn-primary">
          <FiPhone size={15} /> Call Us
        </a>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} className="navbar__mobile-link" onClick={close}>{l.label}</a>
        ))}
        <a href="tel:+919876543210" className="navbar__mobile-cta btn-primary">
          <FiPhone size={15} /> Call Us Now
        </a>
      </div>
    </header>
  );
}
