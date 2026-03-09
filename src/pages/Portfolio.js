import React, { useEffect } from 'react';
import './Portfolio.css';

// Easy to expand: just add more objects to this array
const TOOLS = [
  {
    id: 'reels-generator',
    status: 'live',
    title: 'AI Reels Generator',
    category: 'Content AI',
    description: 'Generate high-converting short-form video scripts and Reels content in seconds. Built for creators and marketers who need to produce at scale without sacrificing quality.',
    features: ['Script generation', 'Hook optimisation', 'Platform-specific formats', 'CTA suggestions'],
    url: 'https://reels-frontend-lac.vercel.app/',
    tech: ['React', 'Python', 'Gemini AI'],
    color: '#FFC72C',
  },
  // Future tools will appear here
  {
    id: 'coming-soon-1',
    status: 'soon',
    title: 'More Tools Coming',
    category: 'AI Solutions',
    description: 'New AI tools are in development. Follow our blog or book a call to get early access and stay updated on what\'s launching next.',
    features: [],
    url: null,
    tech: [],
    color: '#333',
  },
];

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const liveTools = TOOLS.filter(t => t.status === 'live');
  const soonTools = TOOLS.filter(t => t.status === 'soon');

  return (
    <div className="portfolio-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">Portfolio</div>
          <h1 className="display page-hero__title">
            Built, Shipped,<br />
            <span className="highlight">Running.</span>
          </h1>
          <p className="page-hero__desc">
            We build AI tools that solve real problems. These aren't demos — they're live, working products.
          </p>
        </div>
      </section>

      <section className="section portfolio-grid-section">
        <div className="container">
          {liveTools.length > 0 && (
            <>
              <div className="section-label">Live Tools</div>
              <div className="portfolio-grid">
                {liveTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </>
          )}

          {soonTools.length > 0 && (
            <div className="portfolio-soon">
              {soonTools.map(tool => (
                <div key={tool.id} className="soon-card">
                  <div className="soon-card__badge">Coming Soon</div>
                  <h3 className="heading soon-card__title">{tool.title}</h3>
                  <p className="soon-card__desc">{tool.description}</p>
                  <a href="/book" className="btn-outline">
                    <span>Get Early Access</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section portfolio-cta">
        <div className="container portfolio-cta__inner">
          <div>
            <div className="section-label">Build With Us</div>
            <h2 className="heading portfolio-cta__title">
              Have an AI tool idea?<br />
              <span className="highlight">Let's build it.</span>
            </h2>
            <p className="portfolio-cta__desc">
              We work with founders to design, build, and ship AI-powered products. 
              Book a call and let's talk about your idea.
            </p>
          </div>
          <a href="/book" className="btn-primary portfolio-cta__btn">
            <span>Book a Free Call</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <div className="tool-card__header" style={{ '--tool-color': tool.color }}>
        <div className="tool-card__status">
          <span className="tool-card__live-dot" />
          Live
        </div>
        <span className="tool-card__category">{tool.category}</span>
      </div>

      <div className="tool-card__body">
        <h2 className="heading tool-card__title">{tool.title}</h2>
        <p className="tool-card__desc">{tool.description}</p>

        {tool.features.length > 0 && (
          <ul className="tool-card__features">
            {tool.features.map(f => (
              <li key={f}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        )}

        {tool.tech.length > 0 && (
          <div className="tool-card__tech">
            {tool.tech.map(t => (
              <span key={t} className="tool-card__tech-badge">{t}</span>
            ))}
          </div>
        )}
      </div>

      {tool.url && (
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="tool-card__link btn-primary"
        >
          <span>Try the Tool</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      )}
    </div>
  );
}
