import React from "react";

const appsList = [
  {
    name: "Kite",
    description: "The flagship trading platform by Zerodha. Fast, elegant, and feature-rich.",
    icon: "📈",
    tag: "Trading",
    link: "https://kite.zerodha.com",
  },
  {
    name: "Console",
    description: "The back office platform. View your reports, statements, and tax documents.",
    icon: "🖥️",
    tag: "Back Office",
    link: "https://console.zerodha.com",
  },
  {
    name: "Coin",
    description: "Invest in direct mutual funds online. Zero commission, zero hassle.",
    icon: "💰",
    tag: "Mutual Funds",
    link: "https://coin.zerodha.com",
  },
  {
    name: "Varsity",
    description: "Free online stock market education. Learn trading and investing from scratch.",
    icon: "📚",
    tag: "Education",
    link: "https://zerodha.com/varsity",
  },
  {
    name: "Sensibull",
    description: "Options trading platform. Build strategies, analyse risk, and trade smarter.",
    icon: "🎯",
    tag: "Options",
    link: "https://sensibull.com",
  },
  {
    name: "Smallcase",
    description: "Invest in curated baskets of stocks or ETFs built around an idea or theme.",
    icon: "🧺",
    tag: "Portfolios",
    link: "https://smallcase.com",
  },
];

const Apps = () => {
  return (
    <div className="apps-page">
      <h3 className="title">Apps &amp; Tools</h3>
      <p className="apps-subtitle">
        Explore the Zerodha ecosystem of platforms and tools to supercharge your trading.
      </p>

      <div className="apps-grid">
        {appsList.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-icon">{app.icon}</div>
            <div className="app-info">
              <div className="app-header">
                <h4>{app.name}</h4>
                <span className="app-tag">{app.tag}</span>
              </div>
              <p>{app.description}</p>
              <a href={app.link} target="_blank" rel="noreferrer" className="app-link">
                Open {app.name} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;