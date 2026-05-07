import { FiArrowRight, FiMessageSquare, FiUsers, FiAward, FiStar } from 'react-icons/fi';
import '../styles/Hero.css';

const stats = [
  { icon: <FiUsers />, value: '15,000+', label: 'Satisfied Clients' },
  { icon: <FiAward />, value: '8+', label: 'Years of Experience' },
  { icon: <FiStar />, value: '4.9★', label: 'Customer Rating' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background geometry */}
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-tag fade-up">Trusted Since 2018</span>
          <h1 className="hero__title fade-up fade-up-1">
            Start &amp; Manage Your<br />
            <span className="hero__title-accent">Business Easily</span>
          </h1>
          <p className="hero__sub fade-up fade-up-2">
            Simplifying Company Registration, GST, Tax Filing &amp; Compliance Services — all under one roof.
          </p>
          <div className="hero__actions fade-up fade-up-3">
            <a href="/services" className="btn-primary">
              Get Started <FiArrowRight size={17} />
            </a>
            <a href="#contact" className="btn-outline">
              <FiMessageSquare size={17} /> Talk to Expert
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero__badges fade-up fade-up-4">
            <span className="hero__badge">✓ MSME Registered</span>
            <span className="hero__badge">✓ ISO Certified</span>
            <span className="hero__badge">✓ 100% Online</span>
          </div>
        </div>

        {/* Decorative card */}
        <div className="hero__card-wrap fade-up fade-up-2">
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-dot" />
              <span className="hero__card-dot hero__card-dot--2" />
              <span className="hero__card-dot hero__card-dot--3" />
            </div>
            <p className="hero__card-label">Business at a Glance</p>
            <div className="hero__card-items">
              {['Company Registration', 'GST Filing', 'Tax Returns', 'Trademark', 'Compliance'].map((s, i) => (
                <div key={s} className="hero__card-item" style={{ animationDelay: `${i * 0.12 + 0.4}s` }}>
                  <span className="hero__card-check">✓</span>
                  <span>{s}</span>
                  <span className="hero__card-pill">{i < 2 ? 'Active' : i === 2 ? 'Due Soon' : 'Available'}</span>
                </div>
              ))}
            </div>
            <div className="hero__card-cta">
              <span>Get a free consultation</span>
              <FiArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero__stats">
        <div className="container hero__stats-inner">
          {stats.map((s, i) => (
            <div key={s.label} className="hero__stat fade-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <span className="hero__stat-icon">{s.icon}</span>
              <div>
                <span className="hero__stat-val">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
