import React, { useEffect } from 'react';
import './BookCall.css';

// Replace this with your actual Calendly URL
const CALENDLY_URL = process.env.REACT_APP_CALENDLY_URL || 'https://calendly.com/YOUR_LINK_HERE';

const WHAT_TO_EXPECT = [
  {
    step: '01',
    title: 'Tell Us Your Problem',
    desc: 'Walk us through what you\'re building, what\'s not working, or what you want to create. No prep needed.',
  },
  {
    step: '02',
    title: 'We Ask the Right Questions',
    desc: 'We\'ll dig into your goals, constraints, and timeline to understand exactly what success looks like for you.',
  },
  {
    step: '03',
    title: 'You Get a Real Answer',
    desc: 'We\'ll tell you what we\'d build, how we\'d approach it, and what it\'s likely to cost. No vague follow-ups.',
  },
];

export default function BookCall() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="book-page">
      <section className="page-hero book-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">Book a Call</div>
          <h1 className="display page-hero__title">
            30 Minutes.<br />
            <span className="highlight">Real Answers.</span>
          </h1>
          <p className="page-hero__desc">
            Book a free call. Tell us your problem. We'll come back with a clear solution and quote — no fluff, no pressure.
          </p>
        </div>
      </section>

      <section className="section book-section">
        <div className="container book-section__inner">

          {/* What to Expect */}
          <div className="book-expect">
            <h2 className="heading book-expect__title">What to Expect</h2>
            <div className="book-expect__steps">
              {WHAT_TO_EXPECT.map(item => (
                <div key={item.step} className="expect-step">
                  <span className="expect-step__number display">{item.step}</span>
                  <div>
                    <h3 className="heading expect-step__title">{item.title}</h3>
                    <p className="expect-step__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="book-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p>This is a no-commitment discovery call. We won't pitch you anything you don't need.</p>
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="book-calendly">
            {CALENDLY_URL.includes('YOUR_LINK_HERE') ? (
              <div className="calendly-placeholder">
                <div className="calendly-placeholder__inner">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <h3 className="heading">Calendly Coming Soon</h3>
                  <p>The booking calendar will appear here once configured.<br />Set <code>REACT_APP_CALENDLY_URL</code> in your environment variables.</p>
                </div>
              </div>
            ) : (
              <div
                className="calendly-inline-widget"
                data-url={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=ffc72c`}
                style={{ minWidth: '320px', height: '700px' }}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
