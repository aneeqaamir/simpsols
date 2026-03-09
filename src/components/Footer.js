import React from 'react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo-light.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logoLight} alt="SimpSols" height="30" />
            <p className="footer__tagline">
              We build what moves your business forward —<br />
              AI tools, software, and systems that actually work.
            </p>
            <Link to="/book" className="btn-primary footer__cta">
              <span>Book a Free Call</span>
            </Link>
          </div>

          <div className="footer__nav">
            <div className="footer__col">
              <h4 className="footer__col-title">Pages</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/book">Book a Call</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul>
                <li><Link to="/services#ai">AI Solutions</Link></li>
                <li><Link to="/services#marketing">Marketing</Link></li>
                <li><Link to="/services#content">Content</Link></li>
                <li><Link to="/services#development">Development</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Connect</h4>
              <ul>
                <li><a href="mailto:hello@simpsols.com">hello@simpsols.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} SimpSols. All rights reserved.</p>
          <p className="footer__built">Built with precision. Powered by AI.</p>
        </div>
      </div>
    </footer>
  );
}
