import { useRef } from 'react';
import { FiFileText, FiShield, FiCheckSquare, FiDollarSign, FiBriefcase, FiClipboard, FiZap, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../styles/Services.css';

const services = [
  {
    icon: <FiFileText />,
    color: '#3B82F6',
    bg: '#EFF6FF',
    title: 'Registrations',
    desc: 'Startup India, FSSAI, ICEGATE, IEC, PF, ESI, Professional Tax, Digital Signature, Udyam & more.',
    items: [
      'Startup India', 'FSSAI Registration', 'FSSAI License', 'ICEGATE Registration',
      'Import Export Code', 'Legal Entity Identifier', 'PF Registration', 'ESI Registration',
      'Professional Tax Registration', '12A & 80G Registration', 'Darpan Registration',
      'Digital Signature', 'Udyam Registration',
    ],
  },
  {
    icon: <FiShield />,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Trademark',
    desc: 'Trademark registration, objection, opposition, rectification, renewal, transfer & expedited filing.',
    items: [
      'Trademark Registration', 'Trademark Objection', 'Trademark Certificate',
      'Trademark Opposition', 'Trademark Hearing', 'Trademark Rectification',
      'Trademark Renewal', 'Trademark Transfer', 'Expedited TM Registration',
    ],
  },
  {
    icon: <FiCheckSquare />,
    color: '#22c55e',
    bg: '#F0FDF4',
    title: 'GST',
    desc: 'GST registration, return filing, LUT, annual returns, amendments, revocation, appeals & more.',
    items: [
      'GST Registration', 'GST Return Filing by Accountant', 'GST LUT Form',
      'GST Notice', 'GST Annual Return Filing (GSTR-9)', 'GST Registration for Foreigners',
      'GST Amendment', 'GST Revocation', 'GSTR-10', 'GST Cancellation', 'GST Appeal',
    ],
  },
  {
    icon: <FiDollarSign />,
    color: '#F05A28',
    bg: '#FFF0EB',
    title: 'Income Tax',
    desc: 'ITR e-filing for individuals, businesses, companies, trusts, TDS returns & tax notices.',
    items: [
      'Income Tax E-Filing', 'Business Tax Filing', 'Partnership Firm / LLP ITR',
      'Company ITR Filing', 'Trust / NGO Tax Filing', '15CA – 15CB Filing',
      'TAN Registration', 'TDS Return Filing', 'Income Tax Notice', 'Revised ITR (ITR-U)',
    ],
  },
  {
    icon: <FiBriefcase />,
    color: '#0D2B5E',
    bg: '#EEF3FA',
    title: 'MCA',
    desc: 'Company & LLP compliance, director changes, name change, office change, DIN, share transfers & more.',
    items: [
      'Company Compliance', 'LLP Compliance', 'OPC Compliance', 'Name Change – Company',
      'Registered Office Change', 'DIN eKYC Filing', 'DIN Reactivation', 'Director Change',
      'Remove Director', 'ADT-1 Filing', 'DPT-3 Filing', 'LLP Form 11 Filing',
      'MOA / AOA Amendment', 'Share Transfer', 'Winding Up', 'Commencement (INC-20A)',
    ],
  },
  {
    icon: <FiClipboard />,
    color: '#EC4899',
    bg: '#FDF2F8',
    title: 'Compliance',
    desc: 'FSSAI renewal, PF/ESI/PT return filing, bookkeeping, CA support & proprietorship compliance.',
    items: [
      'FSSAI Renewal', 'FSSAI Return Filing', 'Business Plan', 'PF Return Filing',
      'ESI Return Filing', 'Professional Tax Return Filing', 'Partnership Compliance',
      'Proprietorship Compliance', 'Bookkeeping', 'CA Support',
    ],
  },
  {
    icon: <FiZap />,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Startup',
    desc: 'Entity formation for proprietorships, partnerships, OPC, LLP, Pvt Ltd, Section 8, trusts & more.',
    items: [
      'Proprietorship', 'Partnership', 'One Person Company', 'Limited Liability Partnership',
      'Private Limited Company', 'Section 8 Company', 'Trust Registration',
      'Public Limited Company', 'Producer Company', 'Indian Subsidiary',
    ],
  },
];

export default function ServicesScroller() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section className="ss-section">
      <div className="ss-container">
        {/* Header row with nav arrows */}
        <div className="ss-header">
          <div>
            <span className="ss-tag">What We Offer</span>
            <h2 className="ss-title">Our Services</h2>
            <p className="ss-sub">
              From company formation to annual compliance — every business need covered under one roof.
            </p>
          </div>
          <div className="ss-nav">
            <button className="ss-nav-btn" onClick={() => scroll(-1)} aria-label="Scroll left">
              <FiChevronLeft size={20} />
            </button>
            <button className="ss-nav-btn" onClick={() => scroll(1)} aria-label="Scroll right">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div className="ss-track-wrap">
          <div className="ss-track" ref={scrollRef}>
            {services.map((s) => (
              <div className="ss-card" key={s.title}>
                {/* Icon */}
                <div className="ss-card__icon" style={{ background: s.bg, color: s.color }}>
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="ss-card__title">{s.title}</h3>

                {/* Description */}
                <p className="ss-card__desc">{s.desc}</p>

                {/* Learn More */}
                <a href="#contact" className="ss-card__link" style={{ color: s.color }}>
                  Learn More <FiArrowRight size={15} />
                </a>

                {/* Bottom bar */}
                <div className="ss-card__bar" style={{ background: s.color }} />
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="ss-fade ss-fade--left" />
          <div className="ss-fade ss-fade--right" />
        </div>

        {/* Scroll hint dots */}
        <div className="ss-dots">
          {services.map((s, i) => (
            <button
              key={i}
              className="ss-dot"
              style={{ background: s.color }}
              onClick={() => {
                const el = scrollRef.current;
                if (el) el.scrollTo({ left: i * 304, behavior: 'smooth' });
              }}
              aria-label={`Go to ${s.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
