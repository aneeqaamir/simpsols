import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Static fallback posts - will be replaced/augmented by API when backend is live
const STATIC_POSTS = [
  {
    slug: 'why-every-startup-needs-an-ai-strategy',
    title: 'Why Every Startup Needs an AI Strategy in 2025',
    excerpt: 'AI isn\'t a feature you add later. It\'s a foundation you build on from day one. Here\'s how founders should think about integrating AI into their product and ops from the start.',
    category: 'AI Strategy',
    date: '2025-03-01',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'build-vs-buy-ai-tools',
    title: 'Build vs Buy: When to Build Custom AI Tools',
    excerpt: 'Off-the-shelf AI tools are tempting. But for startups with specific workflows, custom-built often wins. Here\'s the framework we use to help founders decide.',
    category: 'AI Solutions',
    date: '2025-02-22',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'performance-marketing-ai-era',
    title: 'Performance Marketing in the AI Era',
    excerpt: 'Ad algorithms have changed. Creative is now the real variable. Here\'s how modern performance marketers are using AI to produce, test, and scale creative faster than ever.',
    category: 'Marketing',
    date: '2025-02-15',
    readTime: '7 min read',
    featured: false,
  },
];

// Backend API URL - set in environment variable
const API_URL = process.env.REACT_APP_API_URL || '';

export default function Blog() {
  const [posts, setPosts] = useState(STATIC_POSTS);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (API_URL) fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/blog/posts`);
      if (res.ok) {
        const data = await res.json();
        if (data.posts && data.posts.length > 0) setPosts(data.posts);
      }
    } catch (err) {
      console.log('Using static posts');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...new Set(posts.map(p => p.category))];
  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);
  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="section-label">Blog</div>
          <h1 className="display page-hero__title">
            Insights &<br />
            <span className="highlight">Perspectives.</span>
          </h1>
          <p className="page-hero__desc">
            AI, marketing, product, and growth — straight from the team building it.
          </p>
        </div>
      </section>

      <section className="section blog-content">
        <div className="container">
          {/* Category Filter */}
          <div className="blog-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading && <div className="blog-loading">Loading posts...</div>}

          {/* Featured Post */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="featured-post">
              <div className="featured-post__meta">
                <span className="blog-category">{featured.category}</span>
                <span className="blog-date">{formatDate(featured.date)}</span>
                <span className="blog-read-time">{featured.readTime}</span>
              </div>
              <h2 className="heading featured-post__title">{featured.title}</h2>
              <p className="featured-post__excerpt">{featured.excerpt}</p>
              <span className="featured-post__cta">
                Read Article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          )}

          {/* Posts Grid */}
          {rest.length > 0 && (
            <div className="blog-grid">
              {rest.map(post => (
                <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                  <div className="blog-card__meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="heading blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <span className="blog-card__read">{post.readTime} →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}
