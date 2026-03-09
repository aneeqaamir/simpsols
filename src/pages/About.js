import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const VALUES = [
  {
    title: 'Execution Over Ideation',
    desc: 'Ideas are cheap. We ship. Every project ends with something real, working, and deployed — not another deck.',
  },
  {
    title: 'Technical Depth',
    desc: 'We don\'t outsource understanding. We go deep on every problem — architecture, AI, data, and design all inform each other.',
  },
  {
    title: 'Founder Empathy',
    desc: 'We\'ve been in the building phase. We understand speed, constraints, and the pressure to get it right the first time.',
  },
  {
    title: 'No Bloat',
    desc: 'No unnecessary meetings, no padded timelines, no fluff in the work. Clean solutions to complex problems.',
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">About</div>
          <h1 className="display page-hero__title">
            Built by a Founder.<br />
            <span className="highlight">For Founders.</span>
          </h1>
          <p className="page-hero__desc">
            SimpSols exists because the tools and teams most founders need are either too expensive, too slow, or too disconnected from the realities of building a business.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <div className="section-label">The Story</div>
            <h2 className="heading about-story__title">
              Where Marketing<br />Meets Engineering.
            </h2>
            <div className="about-story__body">
              <p>
                SimpSols was founded by someone who sat at an unusual intersection: years of hands-on experience in digital marketing — running paid campaigns, building growth strategies, managing e-commerce ventures — combined with a computer science background that made it impossible to see business problems without thinking about the systems underneath.
              </p>
              <p>
                That combination created a gap. Most marketing agencies don't really understand technology. Most dev shops don't really understand how businesses grow. Founders were constantly forced to manage two separate conversations, two separate teams, and two separate bills for work that was fundamentally connected.
              </p>
              <p>
                But it was the emergence of AI that made everything click into place. Not as a trend to chase — but as a genuine shift in what's possible. With access to powerful language models, automation APIs, and modern development tools, problems that once required large teams could be solved by a focused, technical one.
              </p>
              <p>
                SimpSols was built to be that team. The goal isn't to be another agency. It's to be the technical partner that founders actually want — someone who understands the business, knows how to build the technology, and is relentlessly focused on outcomes.
              </p>
            </div>
          </div>

          <div className="about-story__aside">
            <div className="about-card">
              <div className="about-card__label">Our Focus</div>
              <ul className="about-card__list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Startup founders & early-stage teams
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Businesses ready to adopt AI
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Products that need to move fast
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Growth problems with technical solutions
                </li>
              </ul>
            </div>

            <div className="about-card about-card--highlight">
              <div className="about-card__label">The Edge</div>
              <p>
                The rare combination of marketing fluency and engineering depth means we see the full picture — from acquisition funnel to infrastructure, from ad creative to API design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="section-label">How We Work</div>
          <h2 className="heading about-values__title">
            Principles We Don't<br />Compromise On.
          </h2>
          <div className="about-values__grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className="value-card">
                <span className="value-card__number display">0{i + 1}</span>
                <h3 className="heading value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container about-cta__inner">
          <h2 className="display about-cta__title">
            Ready to Build<br />
            <span className="highlight">Something Real?</span>
          </h2>
          <p className="about-cta__desc">
            Book a free call. Tell us what you're working on. We'll be direct about what we can build, how fast, and what it'll take.
          </p>
          <Link to="/book" className="btn-primary">
            <span>Book Your Free 30-Min Call</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
