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
  { icon: <FiMail />, label: 'Email Us', value: 'info@smkassociates.in' },
  { icon: <FiMapPin />, label: 'Our Office', value: '4th Floor, Prestige Tower, MG Road, Chennai - 600001' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', hpField: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const postWithTimeout = async (url, payload, timeoutMs = 10000) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const json = await response.json().catch(() => ({}));
      return { response, json };
    } finally {
      clearTimeout(timer);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL?.trim();
    if (!webhookUrl) {
      setStatus({ type: 'error', message: 'Lead endpoint is not configured. Please try again later.' });
      return;
    }

    const normalized = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
      hpField: form.hpField.trim(),
    };

    if (!normalized.name || !normalized.email || !normalized.phone) {
      setStatus({ type: 'error', message: 'Please fill name, email, and phone number.' });
      return;
    }

    if (!isValidEmail(normalized.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (normalized.hpField) {
      setStatus({ type: 'success', message: 'Thank you! Our team will contact you shortly.' });
      setForm({ name: '', email: '', phone: '', service: '', message: '', hpField: '' });
      return;
    }

    const payload = {
      ...normalized,
      source: 'website-contact-form',
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    };

    try {
      setIsSubmitting(true);
      setStatus({ type: '', message: '' });

      const { response, json } = await postWithTimeout(webhookUrl, payload);
      if (!response.ok || !json.ok) {
        throw new Error(json.error || 'Unable to submit enquiry at the moment.');
      }

      setStatus({ type: 'success', message: json.message || 'Thank you! Our team will contact you shortly.' });
      setForm({ name: '', email: '', phone: '', service: '', message: '', hpField: '' });
    } catch (error) {
      const timeoutError = error?.name === 'AbortError';
      setStatus({
        type: 'error',
        message: timeoutError
          ? 'Request timed out. Please try again in a moment.'
          : (error?.message || 'Unable to send your enquiry right now. Please try again shortly.'),
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {contacts.map((c) => (
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
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
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
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us about your requirement..." rows={4} />
            </div>

            <div className="contact__hp" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="hpField"
                value={form.hpField}
                onChange={handle}
                type="text"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <button type="submit" className="btn-primary contact__submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending enquiry...' : <><FiSend size={16} /> Send Enquiry</>}
            </button>

            {status.message && (
              <p className={status.type === 'error' ? 'contact__status contact__status--error' : 'contact__status contact__status--success'}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
