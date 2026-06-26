import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row text-center border-bottom">
        <h1>Pricing</h1>
        <p className="text-muted">
          Free equity investment and flat ₹20 for intraday and F&O trades
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-4 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt="Equity Pricing"
          />
          <h1 className="fs-2">Free Equity Delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE) are absolutely free with
            zero brokerage.
          </p>
        </div>

        <div className="col-4 text-center">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday Trades"
          />
          <h1 className="fs-2">Intraday & F&O Trades</h1>
          <p>
            Flat ₹20 or 0.03% (whichever is lower) per executed order across
            equity, currency and commodity trades.
          </p>
        </div>

        <div className="col-4 text-center">
          <img
            src="media/images/pricing0.svg"
            alt="Direct Mutual Funds"
          />
          <h1 className="fs-2">Free Direct Mutual Funds</h1>
          <p>
            Invest in direct mutual funds with zero brokerage charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;