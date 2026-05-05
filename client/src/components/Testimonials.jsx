import '../styles/Testimonials.css';

const testimonials = [
  {
    name: 'Ramesh Iyer',
    role: 'Founder, TechVentures Pvt Ltd',
    text: 'SKM Associates made our company registration incredibly smooth. The team was proactive, responsive, and handled everything professionally. Highly recommend their services!',
    rating: 5,
    initials: 'RI',
    color: '#3B82F6',
  },
  {
    name: 'Priya Nair',
    role: 'Proprietor, Green Leaf Organics',
    text: 'I was struggling with GST compliance, but SKM Associates simplified everything. Their expert team files my returns on time every month without any hassle.',
    rating: 5,
    initials: 'PN',
    color: '#22c55e',
  },
  {
    name: 'Suresh Menon',
    role: 'Director, BuildRight Constructions',
    text: 'Excellent service for trademark registration. The team guided me through every step. Very transparent pricing and quick turnaround time. Will use again!',
    rating: 5,
    initials: 'SM',
    color: '#8B5CF6',
  },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? 'star star--filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__bg" />
      <div className="container">
        <div className="testimonials__header">
          <span className="section-tag">Client Love</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>What Our Clients Say</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Real stories from real clients who trusted SKM Associates.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{t.text}</p>
              <Stars count={t.rating} />
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
