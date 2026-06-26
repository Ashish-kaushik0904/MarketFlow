import React from 'react';

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
          <a href="#">Track account opening</a>
          <a href="#">Track segment activation</a>
          <a href="#">Intraday Margins</a>
          <a href="#">User Manual</a>
        </div>
      </div>

      <div className="support-hero-right">
        <a href="#" className="support-track-btn">🎫 Track Tickets</a>
        <div className="support-featured">
          <h5>Featured</h5>
          <ol>
            <li><a href="#">Current Takeovers and Delisting - 2024</a></li>
            <li><a href="#">Latest Intraday Leverages - MIS & CO</a></li>
            <li><a href="#">How to transfer funds to MarketFlow</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;