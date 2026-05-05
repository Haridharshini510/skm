import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import '../styles/About.css';

const points = [
  'Direct Taxation (Income Tax) and Indirect Taxation (GST)',
  'Company Registration, Advance Tax and TDS Filing',
  'Import and Export, GST and Income Tax Notice handling',
  'GST and Income Tax Appeals, Trademark, ESI and PF services',
  'Tally and Zoho reconciliation with full bookkeeping support',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__img-wrap">
            <div className="about__img-card about__img-card--main">
              <div className="about__img-placeholder">
                <span className="about__logo-big">SMK</span>
                <span>Associates</span>
              </div>
            </div>
            <div className="about__img-card about__img-card--badge">
              <span className="about__badge-num">8+</span>
              <span className="about__badge-text">Years Experience</span>
            </div>
            <div className="about__img-card about__img-card--stat">
              <span className="about__stat-big">Trusted</span>
              <span>Business Consultants</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">SMK Associates</h2>
          <p className="about__para">
            SMK Associates is a leading accounting firm in India with vast experience in handling the accounting
            requirements of different companies. We provide integrated solutions to simplify financial management and
            meet your enterprise challenges.
          </p>
          <p className="about__para">
            In the past 8 years, we have been helping our clients with taxation, registration, compliance, notice and
            appeal support, trademark, ESI and PF, and bookkeeping services.
          </p>
          <p className="about__para">
            We have a proven track record as business consultants and specialists in Accounting, Auditing, Income Tax,
            GST and Company Registration. We combine technical expertise with your business objectives to deliver
            results with high-quality, affordable, and tailored service.
          </p>

          <ul className="about__list">
            {points.map(p => (
              <li key={p} className="about__list-item">
                <FiCheckCircle className="about__check" size={18} />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <p className="about__para">
            <strong>Mission:</strong> The mission of SMK Associates is to help entrepreneurs start and develop their
            businesses with utmost perfection. We are passionate about helping entrepreneurs become more successful by
            providing the resources they need to build their business.
          </p>
          <p className="about__para">
            <strong>Vision:</strong> Our vision is to create value for our clients by providing high-quality services
            that make a difference. We strive to make sure every client&apos;s needs are met through our expertise and
            quality of work.
          </p>

          <div className="about__actions">
            <a href="/#contact" className="btn-primary">
              Get Free Consultation <FiArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
