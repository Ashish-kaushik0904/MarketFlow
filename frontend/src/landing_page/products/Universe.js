import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5 border-top">
        <h1>The MarketFlow Universe</h1>
        <p>
          Extend your Trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase Logo"
            style={{ width: "50%" }}
          />
          <p>Thematic investment platform</p>
        </div>

        <div className="col-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak Logo"
            style={{ width: "40%" }}
          />
          <p>Algo & strategy platform</p>
        </div>

        <div className="col-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull Logo"
            style={{ width: "60%" }}
          />
          <p>Options trading platform</p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Fund House Logo"
            style={{ width: "50%" }}
          />
          <p>Asset management</p>
        </div>

        <div className="col-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi Logo"
            style={{ width: "40%" }}
          />
          <p>Bonds trading platform</p>
        </div>

        <div className="col-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto Logo"
            style={{ width: "30%" }}
          />
          <p>Insurance platform</p>
        </div>

        <Link to="/signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;