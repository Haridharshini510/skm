import { FiSearch, FiUploadCloud, FiCheckCircle } from 'react-icons/fi';
import '../styles/HowItWorks.css';

const steps = [
  {
    icon: <FiSearch />,
    step: '01',
    title: 'Choose Service',
    desc: 'Browse our services and select what you need. Our experts will guide you if you\'re unsure.',
  },
  {
    icon: <FiUploadCloud />,
    step: '02',
    title: 'Submit Documents',
    desc: 'Submit your documents. We handle all paperwork from here.',
  },
  {
    icon: <FiCheckCircle />,
    step: '03',
    title: 'Get It Done',
    desc: 'Sit back while our professionals process everything. Receive your certificates digitally.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="how__header">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">
            Getting your business compliant has never been easier. Three simple steps to get started.
          </p>
        </div>

        <div className="how__steps">
          {steps.map((s, i) => (
            <div className="how__step" key={s.title}>
              <div className="how__step-num">{s.step}</div>
              <div className="how__step-icon">{s.icon}</div>
              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-desc">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="how__arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
