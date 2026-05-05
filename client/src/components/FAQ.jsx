import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import '../styles/FAQ.css';

const faqs = [
  {
    q: 'What services does SKM Associates provide?',
    a: 'SKM Associates offers a comprehensive suite of business services including company registration (Pvt Ltd, LLP, OPC), GST registration and filing, income tax returns, trademark registration, ROC compliance, and much more. We serve startups, SMEs, and large enterprises across India.',
  },
  {
    q: 'How long does company registration take?',
    a: 'Typically, a Private Limited Company can be incorporated within 7–10 working days, subject to document availability and government processing times. LLP registration usually takes 5–7 working days. We keep you updated throughout the process.',
  },
  {
    q: 'Can I get GST filing support online?',
    a: 'Yes, absolutely! All our GST services are 100% online. You simply share the required invoices and details with us digitally, and our team handles GSTR-1, GSTR-3B, annual returns, and reconciliations without you needing to visit our office.',
  },
  {
    q: 'What documents are required for company registration?',
    a: 'For a Private Limited Company, you typically need: PAN cards and Aadhaar cards of all directors, passport-size photographs, proof of registered office address (utility bill or rent agreement), and bank statements. Our team provides a detailed checklist after consultation.',
  },
  {
    q: 'How can I contact your team?',
    a: 'You can reach us through multiple channels — call or WhatsApp us at +91 98765 43210, email us at info@skmassociates.in, or fill out the contact form on this page. Our team responds within 2 business hours.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={onToggle}>
        <span>{q}</span>
        <span className="faq-item__icon">
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>
      <div className="faq-item__body" style={{ maxHeight: isOpen ? '300px' : '0' }}>
        <p className="faq-item__a">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq">
      <div className="container faq__inner">
        <div className="faq__header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">
            Everything you need to know about our services. Can't find the answer? Just reach out.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
