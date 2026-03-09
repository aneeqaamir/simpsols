import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Services.css';

const SERVICES = [
  {
    id: 'ai',
    number: '01',
    title: 'AI Solutions',
    headline: 'Automate. Integrate. Dominate.',
    description: `Artificial intelligence isn't the future — it's your competitive edge right now. SimpSols designs and builds custom AI solutions that integrate directly into your business operations, replacing manual workflows, unlocking new capabilities, and creating products that weren't possible before.

Whether you're a founder who wants to build an AI-powered SaaS MVP, a business that needs intelligent automation, or a team that wants to integrate LLMs into existing systems — we architect and ship it.`,
    offerings: [
      { title: 'AI-Powered MVPs', desc: 'Turn your AI idea into a working, deployable product fast.' },
      { title: 'Workflow Automation', desc: 'Eliminate repetitive tasks with intelligent automation pipelines.' },
      { title: 'LLM Integrations', desc: 'Plug GPT, Gemini, Claude, or custom models into your stack.' },
      { title: 'AI Chatbots & Agents', desc: 'Custom intelligent agents trained on your business data.' },
      { title: 'Data & Analytics AI', desc: 'AI dashboards and pipelines that surface insights automatically.' },
      { title: 'Custom AI Tools', desc: 'Bespoke tools purpose-built for your specific use case.' },
    ],
  },
  {
    id: 'marketing',
    number: '02',
    title: 'Marketing',
    headline: 'Grow Faster. Spend Smarter.',
    description: `Great products don't market themselves. SimpSols builds performance marketing systems that acquire customers profitably — from strategy and funnel design to paid campaigns and growth loops that compound over time.

We combine data-driven decision making with creative execution to build marketing engines that scale. No vanity metrics. No guesswork. Just results.`,
    offerings: [
      { title: 'Paid Advertising', desc: 'High-ROI campaigns across Google, Meta, TikTok, and more.' },
      { title: 'Growth Strategy', desc: 'Data-backed roadmaps to acquire and retain customers at scale.' },
      { title: 'Funnel Design & Optimization', desc: 'End-to-end conversion funnels that turn clicks into customers.' },
      { title: 'Email & CRM Marketing', desc: 'Automated sequences and retention systems that print revenue.' },
      { title: 'Brand Positioning', desc: 'Sharp positioning that differentiates you from every competitor.' },
      { title: 'Analytics & Reporting', desc: 'Clear attribution, tracking, and insight dashboards.' },
    ],
  },
  {
    id: 'content',
    number: '03',
    title: 'Content',
    headline: 'Content That Converts.',
    description: `In a world drowning in content, only the sharpest cuts through. SimpSols creates high-impact content across every format — short-form video that stops the scroll, copy that converts, and creative assets that make your brand impossible to ignore.

We don't create content for the sake of it. Every piece is built with a purpose: awareness, engagement, or conversion.`,
    offerings: [
      { title: 'Short-Form Video', desc: 'Reels, TikToks, and YouTube Shorts engineered for virality.' },
      { title: 'Social Media Management', desc: 'Consistent, on-brand content calendars across every platform.' },
      { title: 'Copywriting', desc: 'Website copy, ads, emails, and landing pages that sell.' },
      { title: 'Creative Assets', desc: 'Scroll-stopping graphics, thumbnails, and branded visuals.' },
      { title: 'Content Strategy', desc: 'Platform-specific strategies tied to real business goals.' },
      { title: 'AI-Assisted Content Production', desc: 'Scale content output without sacrificing quality.' },
    ],
  },
  {
    id: 'development',
    number: '04',
    title: 'Development',
    headline: 'Ship Fast. Ship Right.',
    description: `Ideas are worthless without execution. SimpSols builds fast — web apps, SaaS products, ecommerce stores, and landing pages that look exceptional, perform flawlessly, and scale with your business.

We work lean and move quickly. No bloated processes, no unnecessary overhead. Just clean code, sharp design, and products delivered on time.`,
    offerings: [
      { title: 'SaaS MVPs', desc: 'Full-stack SaaS products built and launched in weeks, not months.' },
      { title: 'Web Applications', desc: 'Custom web apps with modern tech stacks and clean architecture.' },
      { title: 'Landing Pages', desc: 'Conversion-optimized landing pages that load fast and look sharp.' },
      { title: 'Ecommerce', desc: 'Custom ecommerce stores built to convert and scale.' },
      { title: 'API Development', desc: 'Robust RESTful APIs and backend systems that power your product.' },
      { title: 'Website Redesigns', desc: 'Transform outdated sites into high-performance digital assets.' },
    ],
  },
];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">Services</div>
          <h1 className="display page-hero__title">
            Everything Your<br />
            <span className="highlight">Business Needs.</span>
          </h1>
          <p className="page-hero__desc">
            Four specialised service areas. One focused team. Built for founders who want real results.
          </p>
        </div>
      </section>

      {/* Services List */}
      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`service-section ${i % 2 === 1 ? 'service-section--alt' : ''}`}
        >
          <div className="container service-section__inner">
            <div className="service-section__header">
              <span className="service-section__number display">{service.number}</span>
              <div>
                <div className="section-label">{service.title}</div>
                <h2 className="heading service-section__headline">{service.headline}</h2>
              </div>
            </div>

            <div className="service-section__body">
              <div className="service-section__desc">
                {service.description.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>

              <div className="service-section__offerings">
                {service.offerings.map(o => (
                  <div key={o.title} className="offering-item">
                    <div className="offering-item__icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <strong>{o.title}</strong>
                      <span>{o.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-section__cta">
              <Link to="/book" className="btn-primary">
                <span>Discuss Your Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="section services-cta">
        <div className="container services-cta__inner">
          <h2 className="display services-cta__title">
            Not Sure What<br />
            <span className="highlight">You Need?</span>
          </h2>
          <p className="services-cta__desc">
            That's exactly what the free call is for. Explain your situation and we'll tell you exactly what to build and how.
          </p>
          <Link to="/book" className="btn-primary">
            <span>Book a Free 30-Min Call</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
