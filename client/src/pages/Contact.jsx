import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import '../styles/Contact.css';

const services = [
  'Company Registration',
  'GST Filing',
  'Income Tax Filing',
  'Trademark Registration',
  'ROC Compliance',
  'FSSAI License',
  'Other',
];

const contacts = [
  { icon: <FiPhone />, label: 'Call / WhatsApp', value: '+91 98765 43210' },
  { icon: <FiMail />, label: 'Email Us', value: 'info@skmassociates.in' },
  { icon: <FiMapPin />, label: 'Our Office', value: '4th Floor, Prestige Tower, MG Road, Chennai – 600001' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Talk About Your Business</h2>
          <p className="section-sub">
            Fill in the form and one of our experts will reach out to you within 2 business hours.
          </p>

          <div className="contact__cards">
            {contacts.map(c => (
              <div className="contact__card" key={c.label}>
                <span className="contact__card-icon">{c.icon}</span>
                <div>
                  <div className="contact__card-label">{c.label}</div>
                  <div className="contact__card-val">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Send an Enquiry</h3>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Ramesh Kumar" required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@email.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select name="service" value={form.service} onChange={handle}>
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us about your requirement..." rows={4} />
            </div>

            <button type="submit" className="btn-primary contact__submit">
              {submitted ? '✓ Enquiry Sent!' : <><FiSend size={16} /> Send Enquiry</>}
            </button>

            {submitted && (
              <p className="contact__success">
                Thank you! Our team will contact you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
