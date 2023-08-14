import React, { useState } from "react";
import Connect from "../../components/Connect";

const HighwayBlossom = (props) => {
  return (
    <div className="project-info">
      <h2>Highway Blossom </h2>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-md-3">
          <p>
            <strong>Highway Blossom</strong> 🌐
            <br />
            🈴 Near Mysore Deep Factory,
            <br />
            Garipipliya, AB Road, Indore
          </p>
          <p>
            <strong>Rate &amp; Booking Condition:-</strong>
            <br />
            ➡️ Residential- 2699 SqFt
            <br />
            ➡️ Commercial- 5799/- SqFt
            <br />
            ➡️ Commercial Back- 3799/- SqFt
            <br />
            Down Payment - 30% (15 Days)
            <br />
            EMI - 10% on T&amp;CP
            <br />
            Balance - 60% Finance/Self&nbsp;
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
            <strong>Terms and conditions apply</strong>
          </p>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="iframe-container">
              <iframe
                className="responsive-iframe"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14708.820526054691!2d75.90239515149194!3d22.831899018922794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHighway%20Blossom%20Indore!5e0!3m2!1sen!2sin!4v1682960192243!5m2!1sen!2sin"
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

export default HighwayBlossom;
