import { FiArrowRight, FiTarget, FiEye, FiCheckCircle } from 'react-icons/fi';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__content">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">SMK Associates</h2>
          <p className="about__para">
            SMK Associates is a trusted accounting and compliance partner helping businesses manage taxation,
            registrations, and financial operations with practical, reliable support.
          </p>

          <div className="about__highlights">
            <article className="about__highlight">
              <div className="about__highlight-icon"><FiTarget size={20} /></div>
              <h3 className="about__highlight-title">Mission</h3>
              <p className="about__highlight-text">
                To help entrepreneurs and organizations build, run, and grow their businesses with accurate compliance,
                dependable advisory, and timely execution.
              </p>
            </article>
            <article className="about__highlight">
              <div className="about__highlight-icon"><FiEye size={20} /></div>
              <h3 className="about__highlight-title">Vision</h3>
              <p className="about__highlight-text">
                To be the most trusted business consulting partner by delivering high-quality, value-driven services
                that create measurable impact for every client.
              </p>
            </article>
          </div>

          <article className="about__why">
            <h3 className="about__why-title">Why Choose Us?</h3>
            <ul className="about__why-list">
              <li><FiCheckCircle size={16} />End-to-end support across tax, compliance, and registrations</li>
              <li><FiCheckCircle size={16} />Practical guidance tailored to your business stage</li>
              <li><FiCheckCircle size={16} />Timely execution with transparent communication</li>
            </ul>
          </article>

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
