import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="support-hero">
      <div className="support-hero-left">
        <h3>Support Portal</h3>
        <p>Search an answer or browse help topics to create a ticket</p>

        <div className="support-search-box">
          <span className="support-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Eg: How do I activate F&O, why is my order getting rejected"
          />
        </div>

        <div className="support-quick-links">
          <Link to="/">Track account opening</Link>
          <Link to="/">Track segment activation</Link>
          <Link to="/">Intraday Margins</Link>
          <Link to="/">User Manual</Link>
        </div>
      </div>

      <div className="support-hero-right">
        <Link to="/" className="support-track-btn">
          🎫 Track Tickets
        </Link>

        <div className="support-featured">
          <h5>Featured</h5>

          <ol>
            <li>
              <Link to="/">Current Takeovers and Delisting - 2024</Link>
            </li>

            <li>
              <Link to="/">Latest Intraday Leverages - MIS & CO</Link>
            </li>

            <li>
              <Link to="/">How to transfer funds to MarketFlow</Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;