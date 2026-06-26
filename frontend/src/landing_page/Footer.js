import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mf-footer">
      <div className="mf-footer-top">

        {/* Brand Column */}
        <div className="mf-footer-brand">
          <div className="mf-footer-logo">
            <span className="mf-footer-logo-icon">📈</span>
            <span className="mf-footer-logo-text">MarketFlow</span>
          </div>
          <p className="mf-footer-tagline">
            Trade smarter. Grow faster.
          </p>
          <p className="mf-footer-copy">
            &copy; 2024 MarketFlow. All rights reserved.
          </p>
          <div className="mf-footer-social">
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Instagram">ig</a>
          </div>
        </div>

        {/* Company Links */}
        <div className="mf-footer-col">
          <p className="mf-footer-heading">Company</p>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="#">Referral Program</Link>
          <Link to="#">Careers</Link>
          <Link to="#">MarketFlow Tech</Link>
          <Link to="#">Press & Media</Link>
        </div>

        {/* Support Links */}
        <div className="mf-footer-col">
          <p className="mf-footer-heading">Support</p>
          <Link to="/support">Contact Us</Link>
          <Link to="#">Support Portal</Link>
          <Link to="#">Blog</Link>
          <Link to="#">List of Charges</Link>
          <Link to="#">Downloads</Link>
        </div>

        {/* Account Links */}
        <div className="mf-footer-col">
          <p className="mf-footer-heading">Account</p>
          <Link to="/signup">Open an Account</Link>
          <Link to="/login">Login</Link>
          <Link to="#">Fund Transfer</Link>
          <Link to="#">60 Days Challenge</Link>
        </div>

      </div>

      {/* Bottom Description */}
      <div className="mf-footer-bottom">
        <p>
          MarketFlow is a full-stack stock trading web application built with
          React.js and Node.js. It provides a modern, responsive interface where
          users can sign up, log in securely, and access a personalized trading
          dashboard with holdings, positions, watchlists, and account details.
        </p>
        <p>
          Built with a component-based architecture using React.js, Express.js,
          MongoDB, and JWT authentication — designed for scalability,
          performance, and a smooth user experience across all screen sizes.
        </p>
      </div>

    </footer>
  );
}

export default Footer;