import React, { useState } from "react";
import Connect from "../../components/Connect";

const HighwaySkyCity = (props) => {
  return (
    <div className="project-info">
      <h2>Highway Sky City </h2>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-md-3">
          <p>
            <strong>🔆 Highway Sky City 🔆</strong>
            <br />
            🈴 Gari Pipliya, AB Road, Indore
          </p>
          <p>
            <strong>Rate &amp; Booking Condition:-</strong>
            <br />
            ➡️ Residential - 2200/- SqFt
            <br />
            ➡️ Commercial- 2700/- SqFt
            <br />
            Down Payment - 30%
            <br />
            Balance - 70%&nbsp;
            <br />
            (Finance Or Self - 02 Month)
          </p>
          <p>
            <br />
            <strong>Additional Charges (Per Sqft):-</strong>
            <br />
            30.00 M Govt. Road - 50/-
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.2677227152685!2d75.91969047522902!3d22.829582479309497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631db7919de863%3A0x778f5e9e8185d3ec!2sHighway%20Sky%20City!5e0!3m2!1sen!2sin!4v1682960134561!5m2!1sen!2sin"
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

export default HighwaySkyCity;
