import React from "react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Education"
            style={{ width: "70%" }}
          />
        </div>

        <div className="col-6 mb-5">
          <h1 className="mb-3 fs-2">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <Link
            to="/products"
            className="mx-4"
            style={{ textDecoration: "none" }}
          >
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>

          <p className="mt-5">
            Trading Q&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <Link
            to="/support"
            className="mx-4"
            style={{ textDecoration: "none" }}
          >
            Trading Q&amp;A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;