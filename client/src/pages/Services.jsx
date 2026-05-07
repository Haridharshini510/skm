import { FiFileText, FiShield, FiCheckSquare, FiDollarSign, FiBriefcase, FiClipboard, FiZap } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/ServicePage.css';

const services = [
  {
    icon: <FiFileText />,
    color: '#3B82F6',
    bg: '#EFF6FF',
    title: 'Registrations',
    href: '/registrations',
    desc: 'Startup India, FSSAI, IC EGATE, IEC, PF, ESI, Professional Tax, Digital Signature, Udyam & more.',
    items: [
      'Startup India', 'FSSAI Registration', 'FSSAI License', 'ICEGATE Registration',
      'Import Export Code', 'Legal Entity Identifier', 'PF Registration', 'ESI Registration',
      'Professional Tax Registration', '12A & 80G Registration', 'Darpan Registration', 'Digital Signature', 'Udyam Registration',
    ],
  },
  {
    icon: <FiShield />,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Trademark',
    href: '/trademark',
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
    href: '/gst',
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
    href: '/income-tax',
    desc: 'ITR e-filing for individuals, businesses, companies, trusts, TDS returns & tax notices.',
    items: [
      'Income Tax E-Filing', 'Business Tax Filing', 'Partnership Firm / LLP ITR',
      'Company ITR Filing', 'Trust / NGO Tax Filing', '15CA – 15CB Filing',
      'TAN Registration', 'TDS Return Filing', 'Income Tax Notice', 'Revised ITR Return (ITR-U)',
    ],
  },
  {
    icon: <FiBriefcase />,
    color: '#0D2B5E',
    bg: '#EEF3FA',
    title: 'MCA',
    href: '/mca',
    desc: 'Company & LLP compliance, director changes, name change, office change, DIN, share transfers & more.',
    items: [
      'Company Compliance', 'LLP Compliance', 'OPC Compliance', 'Name Change – Company',
      'Registered Office Change', 'DIN eKYC Filing', 'DIN Reactivation', 'Director Change',
      'Remove Director', 'ADT-1 Filing', 'DPT-3 Filing', 'LLP Form 11 Filing',
      'Dormant Status Filing', 'MOA Amendment', 'AOA Amendment',
      'Authorized Capital Increase', 'Share Transfer', 'Demat of Shares',
      'Winding Up – LLP', 'Winding Up – Company', 'Commencement (INC-20A)', 'CCFS Scheme',
    ],
  },
  {
    icon: <FiClipboard />,
    color: '#EC4899',
    bg: '#FDF2F8',
    title: 'Compliance',
    href: '/compliance',
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
    href: '/startup',
    desc: 'Entity formation for proprietorships, partnerships, OPC, LLP, Pvt Ltd, Section 8, trusts & more.',
    items: [
      'Proprietorship', 'Partnership', 'One Person Company', 'Limited Liability Partnership',
      'Private Limited Company', 'Section 8 Company', 'Trust Registration',
      'Public Limited Company', 'Producer Company', 'Indian Subsidiary',
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="sg-section">
      <div className="sg-container">
        <div className="sg-header">
          <span className="sg-tag">What We Offer</span>
          <h2 className="sg-title">Our Services</h2>
          <p className="sg-sub">
            From company formation to annual compliance — every business need covered under one roof.
          </p>
        </div>

        <div className="sg-grid">
          {services.map((s) => (
            <div className="sg-card" key={s.title}>
              {/* Icon */}
              <div className="sg-card__icon" style={{ background: s.bg, color: s.color }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="sg-card__title">{s.title}</h3>

              {/* Description */}
              <p className="sg-card__desc">{s.desc}</p>

              {/* Item pills */}
              <ul className="sg-card__items">
                {s.items.slice(0, 5).map((item) => (
                  <li key={item} className="sg-card__item">
                    <span className="sg-card__dot" style={{ background: s.color }} />
                    {item}
                  </li>
                ))}
                {s.items.length > 5 && (
                  <li className="sg-card__more" style={{ color: s.color }}>
                    +{s.items.length - 5} more services
                  </li>
                )}
              </ul>

              {/* CTA */}
              <a href={s.href} className="sg-card__link" style={{ color: s.color }}>
                Learn More <FiArrowRight size={15} />
              </a>

              {/* Bottom accent bar */}
              <div className="sg-card__bar" style={{ background: s.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
