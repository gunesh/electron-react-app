import React, { useState } from "react";
import Connect from "../../components/Connect";

const HighwayParamount = (props) => {
  

  return (
    <div className="project-info">
    <h2>Highway Paramount </h2>
    <div className="row">
      <div className="col-md-6 col-sm-6 col-md-3">
        <p>
          <strong>☢️ Highway Paramount &nbsp;☢️</strong>
          <br />
          🈴 Jetpura (Dharampuri)
          <br />
          Ujjain Road, Indore
        </p>
        <p>
          <strong>Rate &amp; Booking Condition:-</strong>
          <br />
          ➡️ Residential - 2100/- SqFt
          <br />
          Down Payment - 30%
          <br />
          Balance - 70%&nbsp;
          <br />
          Finance or Self Payment&nbsp;
        </p>
        <p>
          <strong>Additional Charges (Per Sqft):-</strong>
          <br />
          Garden Facing - 150/-
          <br />
          Corner - 200/-
          <br />
          Corner + Garden - 200/-
          <br />
          MPEB Development - 150/-
          <br />
          Registry - As per Govt. norms.
        </p>
        <p>
          <strong>Discount Scheme:-</strong>
          <br />
          2% Discount on 50% DP (15 Days)
          <br />
          5% Discount on full Payment (15 Days)
        </p>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d137055.16072633327!2d75.75635606517663!3d22.71334650076459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shighway%20paramount%20Jetpura%20Indore!5e0!3m2!1sen!2sin!4v1682959840096!5m2!1sen!2sin"
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

export default HighwayParamount;
