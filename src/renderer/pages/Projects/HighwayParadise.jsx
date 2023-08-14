import React, { useState } from "react";
import Connect from "../../components/Connect";

const HighwayParadise = (props) => {
  return (
    <div className="project-info">
      <h2>Highway Paradise </h2>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-md-3">
          <p>
            <strong>🔰 Highway Paradise 🔰</strong>
            <br />
            🈴 Near Singapore Township,&nbsp;
            <br />
            AB Road, Indore
          </p>
          <p>
            <strong>Rate &amp; Booking Condition:-</strong>
            <br />
            ➡️ Residential- 2325/- SqFt
            <br />
            ➡️ Commercial- 3250/- SqFt
            <br />
            ➡️ Commercial Back- 2500/- SqFt
            <br />
            Down Payment - 30%
            <br />
            Balance - 70% &nbsp;(Time 02 Month)
          </p>
          <p>
            <strong>Additional Charges (Per Sqft):-</strong>
            <br />
            9.00 M Road - 25/-
            <br />
            Garden Facing - 125/-
            <br />
            Corner - 200/-
            <br />
            Corner + Garden - 200/-
            <br />
            MPEB Development - 150/-
            <br />
            Registry - As per Govt. norms
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="iframe-container">
              <iframe
                className="responsive-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.565657373035!2d75.90680487522859!3d22.8185526793173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d39d7bc04d3%3A0x3c96a681bfeb9f42!2sHighway%20Paradise!5e0!3m2!1sen!2sin!4v1682960073067!5m2!1sen!2sin"
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

export default HighwayParadise;
