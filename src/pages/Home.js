import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const SERVICES = [
  {
    id: 'ai',
    number: '01',
    title: 'AI Solutions',
    description: 'Custom AI tools, automation pipelines, and intelligent MVPs that give your business an unfair edge.',
    tags: ['AI Tools', 'Automation', 'Integrations', 'AI MVPs'],
  },
  {
    id: 'marketing',
    number: '02',
    title: 'Marketing',
    description: 'Performance-driven marketing, paid campaigns, and growth funnels built to acquire and convert at scale.',
    tags: ['Paid Ads', 'Growth Strategy', 'Funnels', 'Analytics'],
  },
  {
    id: 'content',
    number: '03',
    title: 'Content',
    description: 'High-converting content across every format — video, copy, and creative assets that stop the scroll.',
    tags: ['Short-form Video', 'Copywriting', 'Social Media', 'Creative'],
  },
  {
    id: 'development',
    number: '04',
    title: 'Development',
    description: 'Web apps, SaaS MVPs, and ecommerce stores built fast and built right — no bloat, no wasted time.',
    tags: ['Web Apps', 'SaaS MVPs', 'Landing Pages', 'Ecommerce'],
  },
];

const STATS = [
  { value: '4', label: 'Core Service Areas' },
  { value: 'AI', label: 'First Approach' },
  { value: '30', label: 'Min Free Consultation' },
  { value: '∞', label: 'Scalable Solutions' },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grid" />
          <div className="hero__glow" />
        </div>

        <div className="container hero__content">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            Startup-Focused Digital Agency
          </div>

          <h1 className="hero__headline display">
            We Build What<br />
            <span className="highlight">Moves Your</span><br />
            Business Forward
          </h1>

          <p className="hero__sub">
            AI tools, software products, and digital systems<br />
            for founders who are serious about growth.
          </p>

          <div className="hero__actions">
            <Link to="/book" className="btn-primary">
              <span>Book a Free 30-Min Call</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/services" className="btn-outline">
              <span>See What We Do</span>
            </Link>
          </div>

          <div className="hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {['AI Solutions', 'Marketing', 'Content', 'Development', 'Automation', 'SaaS MVPs', 'Growth Funnels', 'AI Tools'].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-dot">✦</span>
            </span>
          ))}
          {['AI Solutions', 'Marketing', 'Content', 'Development', 'Automation', 'SaaS MVPs', 'Growth Funnels', 'AI Tools'].map((item, i) => (
            <span key={`r-${i}`} className="marquee-item" aria-hidden>
              {item} <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section home-services">
        <div className="container">
          <div className="section-label">What We Do</div>
          <div className="home-services__header">
            <h2 className="heading home-services__title">
              One Partner.<br />Every Problem Solved.
            </h2>
            <p className="home-services__desc">
              Whether you need an AI tool built from scratch, a marketing engine that drives leads, 
              content that converts, or a full software product — SimpSols handles it all.
            </p>
          </div>

          <div className="home-services__grid">
            {SERVICES.map((s) => (
              <Link to={`/services#${s.id}`} key={s.id} className="service-card">
                <div className="service-card__number">{s.number}</div>
                <div className="service-card__body">
                  <h3 className="service-card__title heading">{s.title}</h3>
                  <p className="service-card__desc">{s.description}</p>
                  <div className="service-card__tags">
                    {s.tags.map(tag => (
                      <span key={tag} className="service-card__tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="service-card__arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="section home-portfolio">
        <div className="container">
          <div className="home-portfolio__inner">
            <div className="home-portfolio__text">
              <div className="section-label">AI Tools</div>
              <h2 className="heading home-portfolio__title">
                Built & Deployed.<br />
                <span className="highlight">Already Working.</span>
              </h2>
              <p className="home-portfolio__desc">
                We don't just talk about AI — we ship it. 
                Our portfolio features live tools solving real problems for real businesses.
              </p>
              <Link to="/portfolio" className="btn-primary">
                <span>View Portfolio</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="home-portfolio__card">
              <div className="portfolio-preview">
                <div className="portfolio-preview__header">
                  <span className="portfolio-preview__dot" />
                  <span className="portfolio-preview__dot" />
                  <span className="portfolio-preview__dot" />
                </div>
                <div className="portfolio-preview__content">
                  <div className="portfolio-preview__label">Live Tool</div>
                  <h3 className="portfolio-preview__name heading">AI Reels Generator</h3>
                  <p className="portfolio-preview__desc">
                    Generate high-converting short-form video scripts and reels content powered by AI.
                  </p>
                  <a
                    href="https://reels-frontend-lac.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary portfolio-preview__link"
                  >
                    <span>Try the Tool</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section home-cta">
        <div className="container">
          <div className="home-cta__inner">
            <div className="home-cta__text">
              <h2 className="display home-cta__title">
                Got a Problem?<br />
                <span className="highlight">Let's Solve It.</span>
              </h2>
              <p className="home-cta__desc">
                Book a free 30-minute call. Tell us what you're building.
                We'll come back with a solution and a quote.
              </p>
            </div>
            <div className="home-cta__action">
              <Link to="/book" className="btn-primary home-cta__btn">
                <span>Book Your Free Call</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </Link>
              <p className="home-cta__note">No commitment. No sales pitch. Just real talk.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
