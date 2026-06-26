import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-2">
        <h1>Technology</h1>

        <h5 className="text-muted mt-2">
          Sleek, modern and intuitive platform
        </h5>

        <br />
        <br />

        <p>
          Check out our{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Investment Offerings{" "}
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;