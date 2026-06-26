import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-4">
        <div className="col-6 p-4">
          <h1 className="fs-3 mb-5">Trust with Confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust MarketFlow with 3.5+ lakh crore
            worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No spam, gimmicks, gamification, or annoying push notifications.
            High-quality apps that you can use at your own pace.
          </p>

          <h2 className="fs-4">The MarketFlow Universe</h2>
          <p className="text-muted">
            Not just an app, but a complete ecosystem. Our fintech solutions
            offer services tailored to your investment needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like smart insights and portfolio tracking, we help
            you make better financial decisions.
          </p>
        </div>

        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="MarketFlow Ecosystem"
            style={{ width: "90%" }}
          />

          <div className="text-center p-5">
            <Link
              to="/products"
              className="mx-4"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </Link>

            <Link to="/signup" style={{ textDecoration: "none" }}>
              Try MarketFlow Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;