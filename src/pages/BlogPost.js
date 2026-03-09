import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Blog.css';

const STATIC_POSTS = {
  'why-every-startup-needs-an-ai-strategy': {
    title: 'Why Every Startup Needs an AI Strategy in 2025',
    category: 'AI Strategy',
    date: '2025-03-01',
    readTime: '6 min read',
    content: `
      <p>Most founders treat AI as an afterthought. Something to integrate later, once the product is stable. That's a mistake — and it's becoming a more costly one every month.</p>
      
      <h2>AI is Infrastructure, Not a Feature</h2>
      <p>The mistake is framing AI as a feature you add to your product. In reality, it's becoming infrastructure — the layer that determines how fast you can move, how much your team can do, and how well your product understands its users.</p>
      
      <p>The startups winning right now aren't just using AI for a chatbot. They're using it to compress their development cycles, automate their support, personalise their product, and scale their marketing. Every function benefits.</p>

      <h2>The Compounding Advantage</h2>
      <p>Here's the hard truth: AI adoption is compounding. The startups that started thinking about this 18 months ago have now built systems, trained models on their data, and created workflows that give them real leverage. Starting from scratch today doesn't mean you can't catch up — but it does mean you need to move faster.</p>
      
      <h2>What an AI Strategy Actually Looks Like</h2>
      <p>An AI strategy isn't complicated. It's a clear-eyed view of where your biggest inefficiencies and opportunities are, and a prioritised plan for where AI can have the highest impact first.</p>
      
      <p>For most early-stage startups, that means starting with:</p>
      <ul>
        <li>Automating internal workflows (support, reporting, content)</li>
        <li>Adding intelligent features to the core product</li>
        <li>Using AI to accelerate your own development process</li>
      </ul>

      <h2>Start Small, Think Systemically</h2>
      <p>You don't need to build AGI to win. You need to find the 3-4 places in your business where AI can give you a measurable edge, and build those first.</p>
      
      <p>That's what we help founders do. If you want to think through where AI fits in your business, book a free 30-minute call and let's map it out together.</p>
    `,
  },
  'build-vs-buy-ai-tools': {
    title: 'Build vs Buy: When to Build Custom AI Tools',
    category: 'AI Solutions',
    date: '2025-02-22',
    readTime: '8 min read',
    content: `
      <p>There are hundreds of AI tools available today. So why would you build your own? The answer isn't always obvious — but when it's right, it's decisively right.</p>
      
      <h2>The Case for Off-the-Shelf</h2>
      <p>For most generic use cases, buying makes sense. You don't need to build your own email client, your own calendar, or your own analytics platform. The market has solved these problems well.</p>
      
      <p>The same applies to many AI tools. If you need basic content generation, a customer service bot, or simple document summarisation — there are solid, affordable tools that handle this.</p>
      
      <h2>When to Build Custom</h2>
      <p>Custom AI tools win when your use case is specific enough that generic tools either don't work well or create ongoing limitations. Signs that you should build:</p>
      <ul>
        <li>Your workflow doesn't match any existing tool's workflow</li>
        <li>You need the AI trained on proprietary data</li>
        <li>The tool will become a product you sell to customers</li>
        <li>You're doing volume that makes SaaS pricing unsustainable</li>
      </ul>

      <h2>The Hidden Cost of Cobbling</h2>
      <p>Many founders end up with 5-7 AI tools duct-taped together. It works, until it doesn't. Integration debt accumulates. Workflows break when one tool updates. Data is scattered.</p>
      
      <p>A custom solution eliminates this — and if designed well, it actually becomes a competitive asset that's hard to replicate.</p>
    `,
  },
  'performance-marketing-ai-era': {
    title: 'Performance Marketing in the AI Era',
    category: 'Marketing',
    date: '2025-02-15',
    readTime: '7 min read',
    content: `
      <p>Meta's algorithm has changed more in the last two years than in the previous five. So has Google's. The shift is fundamental: these platforms have gotten very good at finding buyers — if you give them the right creative.</p>
      
      <h2>Creative is the New Targeting</h2>
      <p>For years, performance marketers obsessed over audience targeting. Lookalikes, interest stacks, exclusion lists. Today, that edge has mostly disappeared. Broad targeting with exceptional creative now outperforms precise targeting with average creative.</p>
      
      <p>This is the single biggest shift in paid advertising, and most brands haven't adjusted yet.</p>
      
      <h2>How AI Changes the Creative Equation</h2>
      <p>The bottleneck in modern performance marketing is creative production and iteration speed. You need more angles, more formats, more hooks — tested faster than ever before.</p>
      
      <p>AI unlocks this. Not by replacing creative judgement, but by compressing the time between idea and deployed variation. Script generation, static concept creation, copy iteration — all of these can be accelerated dramatically with the right AI workflow.</p>
      
      <h2>The Winning Playbook</h2>
      <p>The performance marketers winning right now are:</p>
      <ul>
        <li>Running broad targeting with 8-15 creative variations</li>
        <li>Using AI to generate and test creative angles quickly</li>
        <li>Letting the algorithm find the buyers, not doing it manually</li>
        <li>Analysing creative performance data to inform the next batch</li>
      </ul>
      
      <p>This is a flywheel. Data informs creative. Creative performs. Performance data improves the next creative. It compounds.</p>
    `,
  },
};

const API_URL = process.env.REACT_APP_API_URL || '';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    if (API_URL) {
      try {
        const res = await fetch(`${API_URL}/api/blog/posts/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
          setLoading(false);
          return;
        }
      } catch (err) {}
    }
    setPost(STATIC_POSTS[slug] || null);
    setLoading(false);
  };

  if (loading) return <div className="blog-loading-full">Loading...</div>;

  if (!post) return (
    <div className="blog-not-found">
      <div className="container">
        <h2 className="heading">Post not found</h2>
        <Link to="/blog" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="blog-post-page">
      <div className="blog-post__hero">
        <div className="container">
          <Link to="/blog" className="blog-post__back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Blog
          </Link>
          <div className="blog-post__meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="blog-read-time">{post.readTime}</span>
          </div>
          <h1 className="heading blog-post__title">{post.title}</h1>
        </div>
      </div>

      <div className="blog-post__content-wrap">
        <div className="container">
          <article
            className="blog-post__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="blog-post__footer">
            <div className="blog-post__cta">
              <h3 className="heading">Ready to put this into action?</h3>
              <p>Book a free 30-minute call with SimpSols and we'll show you exactly what's possible for your business.</p>
              <Link to="/book" className="btn-primary">
                <span>Book a Free Call</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
