import { FiBriefcase, FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import logo from '../assets/logo.png';
import '../styles/Footer.css';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/#contact' },
];
const services = ['Company Registration', 'GST Filing', 'Income Tax', 'Trademark', 'ROC Compliance'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="SMK Logo" className="footer__logo-icon" />
            <span>
              <span className="footer__logo-smk">SMK</span>
              <span className="footer__logo-assoc"> Associates</span>
            </span>
          </div>
          <p className="footer__tagline">
            Simplifying compliance and business formation for entrepreneurs across India since 2014.
          </p>
          <div className="footer__socials">
            {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="footer__social"><Icon size={16} /></a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__list">
            {quickLinks.map(l => (
              <li key={l.label}><a href={l.href} className="footer__link">{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <ul className="footer__list">
            {services.map(s => (
              <li key={s}><a href="/#services" className="footer__link">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>
          <ul className="footer__contact-list">
            <li><FiPhone size={14} /><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><FiMail size={14} /><a href="mailto:info@smkassociates.in">info@smkassociates.in</a></li>
            <li><FiMapPin size={14} /><span>4th Floor, Prestige Tower,<br/>MG Road, Chennai – 600001</span></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} SMK Associates. All rights reserved.</span>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
