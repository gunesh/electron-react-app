import React, { useState } from "react";
import Connect from "../../components/Connect";

const HighwaySereneCity = (props) => {
  
  return (
    <div className="project-info">
    <h2>Highway Serene City </h2>
    <div className="row">
      <div className="col-md-6 col-sm-6 col-md-3">
        <p>
          <strong>🌐 Highway Serene City &nbsp;🌐</strong>
          <br />
          🈴 Bijjukhedi, AB Road, Indore
        </p>
        <p>
          <strong>Rate &amp; Booking Condition:-</strong>
          <br />
          ➡️ Residential- 2025/- SqFt
          <br />
          ➡️ Commercial- 2900/- SqFt
          <br />
          ➡️ Commercial Back- 2275/- SqFt
          <br />
          Down Payment - 30% (15 Days)
          <br />
          Balance - 70%&nbsp;
          <br />
          Finance or Self Payment (2 Month)
        </p>
        <p>
          <strong>Additional Charges (Per Sqft):-</strong>
          <br />
          Garden Facing - 125/-
          <br />
          Corner - 200/-
          <br />
          Corner + Garden - 200/-
          <br />
          MPEB Development - 150/-
          <br />
          Registry - As per Govt. norms.
        </p>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.430915126567!2d75.90071907522875!3d22.823541579313773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d4f50cf9e55%3A0x73b5d13ce92342fd!2sHighway%20Serene%20City!5e0!3m2!1sen!2sin!4v1682959986165!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div className="row connect-us">
        <Connect />
      </div>
  </div>
  );
};

export default HighwaySereneCity;
