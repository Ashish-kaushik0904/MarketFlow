import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mf-navbar">
      <div className="mf-navbar-inner">

        {/* Logo */}
        <Link to="/" className="mf-logo">
          <span className="mf-logo-icon">📈</span>
          <span className="mf-logo-text">MarketFlow</span>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="mf-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul className={`mf-nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link></li>
          <li><Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
          <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
