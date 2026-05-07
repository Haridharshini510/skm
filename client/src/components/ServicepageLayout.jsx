import { FiArrowLeft, FiArrowRight, FiCheck, FiPhone, FiMail } from 'react-icons/fi';
import '../styles/ServicepageLayout.css';

/**
 * Shared layout for all service category pages.
 *
 * Props:
 *  - icon        ReactNode  — large hero icon
 *  - color       string     — brand accent color for this category
 *  - bg          string     — light tint bg for icon boxes
 *  - category    string     — e.g. "Registrations"
 *  - tagline     string     — one-liner shown under heading
 *  - description string     — paragraph intro
 *  - services    { name, desc }[]  — individual service cards
 *  - faqs        { q, a }[] — optional FAQ pairs
 *  - whyPoints   string[]   — bullet points for "Why SKM" sidebar
 */
export default function ServicePageLayout({
  icon, color, bg, category, tagline, description, services, faqs = [], whyPoints = [],
}) {
  return (
    <div className="spl">
      {/* ── Hero banner ── */}
      <section className="spl__hero" style={{ '--cat-color': color, '--cat-bg': bg }}>
        <div className="spl__hero-grid" />
        <div className="spl__hero-blob" />
        <div className="container spl__hero-inner">
          <a href="/" className="spl__back">
            <FiArrowLeft size={16} /> Back to Home
          </a>
          <div className="spl__hero-icon">{icon}</div>
          <span className="spl__hero-label">Our Services</span>
          <h1 className="spl__hero-title">{category}</h1>
          <p className="spl__hero-tagline">{tagline}</p>
          <div className="spl__hero-cta">
            <a href="#services" className="spl__btn-primary">
              Explore Services <FiArrowRight size={16} />
            </a>
            <a href="#contact" className="spl__btn-outline">
              <FiPhone size={15} /> Talk to Expert
            </a>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="container spl__body">
        {/* Left: service cards + FAQs */}
        <main className="spl__main">
          <p className="spl__desc">{description}</p>

          {/* Service cards */}
          <h2 className="spl__section-heading" id="services">All {category} Services</h2>
          <div className="spl__cards">
            {services.map((s, i) => (
              <div className="spl__card" key={i} style={{ '--cat-color': color }}>
                <div className="spl__card-num" style={{ color, background: bg }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="spl__card-body">
                  <h3 className="spl__card-name">{s.name}</h3>
                  {s.desc && <p className="spl__card-desc">{s.desc}</p>}
                </div>
                <a href="#enquire" className="spl__card-cta" style={{ color }}>
                  Get Started <FiArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>

          {/* FAQ */}
          {faqs.length > 0 && (
            <div className="spl__faqs">
              <h2 className="spl__section-heading">Frequently Asked Questions</h2>
              {faqs.map((f, i) => (
                <details className="spl__faq" key={i}>
                  <summary className="spl__faq-q">{f.q}</summary>
                  <p className="spl__faq-a">{f.a}</p>
                </details>
              ))}
            </div>
          )}
        </main>

        {/* Right: sticky sidebar */}
        <aside className="spl__sidebar">
          {/* Why SKM */}
          <div className="spl__sidebar-card">
            <h4 className="spl__sidebar-title">Why SMK Associates?</h4>
            <ul className="spl__why-list">
              {whyPoints.map((p, i) => (
                <li key={i} className="spl__why-item">
                  <span className="spl__why-check" style={{ color }}>
                    <FiCheck size={14} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Enquiry card */}
          <div className="spl__enquiry" id="enquire" style={{ '--cat-color': color }}>
            <h4 className="spl__enquiry-title">Get a Free Consultation</h4>
            <p className="spl__enquiry-sub">Talk to our expert within 2 business hours.</p>
            <div className="spl__enquiry-fields">
              <input placeholder="Your Name" className="spl__input" />
              <input placeholder="Phone Number" className="spl__input" />
              <select className="spl__input">
                <option value="">Select Service</option>
                {services.map((s, i) => <option key={i}>{s.name}</option>)}
              </select>
              <button className="spl__enquiry-btn" style={{ background: color }}>
                Request Callback <FiArrowRight size={15} />
              </button>
            </div>
            <div className="spl__enquiry-contact">
              <a href="tel:+919876543210"><FiPhone size={13} /> +91 98765 43210</a>
              <a href="mailto:info@skmassociates.in"><FiMail size={13} /> info@skmassociates.in</a>
            </div>
          </div>

          {/* Other categories quick nav */}
          <div className="spl__sidebar-card">
            <h4 className="spl__sidebar-title">Other Services</h4>
            <div className="spl__nav-links">
              {[
                { label: 'Registrations', to: '/registrations' },
                { label: 'Trademark', to: '/trademark' },
                { label: 'GST', to: '/gst' },
                { label: 'Income Tax', to: '/income-tax' },
                { label: 'MCA', to: '/mca' },
                { label: 'Compliance', to: '/compliance' },
                { label: 'Startup', to: '/startup' },
              ].map((l) => (
                <a key={l.to} href={l.to} className="spl__nav-link">
                  {l.label} <FiArrowRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── Bottom CTA banner ── */}
      <section className="spl__cta-banner" style={{ '--cat-color': color }}>
        <div className="container spl__cta-inner">
          <div>
            <h3 className="spl__cta-title">Ready to get started with {category}?</h3>
            <p className="spl__cta-sub">Our experts are just a call away — no hidden charges, 100% online.</p>
          </div>
          <a href="#enquire" className="spl__btn-white">
            Get Free Consultation <FiArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
