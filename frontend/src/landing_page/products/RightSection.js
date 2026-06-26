import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top mt-5">
      <div className="row">
        <div className="col-6 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;