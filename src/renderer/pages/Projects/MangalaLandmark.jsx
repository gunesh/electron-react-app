import React, { useState } from "react";
import Connect from "../../components/Connect";

const MangalaLandmark = (props) => {
  return (
    <div className="project-info">
      <h2>Mangala Landmark (#2BHK #3bhk Luxury Residential Apartment) </h2>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-md-3">
          <p>Dream Home in your budget</p>

          <p>Ultra Spacious #2BHK #3bhk Luxury Residential Apartment</p>

          <p>40+ Amenities</p>

          <p>On Ujjain Road, Near Aurobindo Hospital, Indore</p>

          <p>Nearby Proposed ISBT & Metro Station</p>

          <p>IT, Medical, and Education Hub Just 5 Min. Way</p>

          <p>Upto 90% loan Available</p>
        </div>
        <div className="col-md-6">
          <div className="row"></div>
        </div>
      </div>
      <div className="row connect-us">
        <Connect />
      </div>
    </div>
  );
};

export default MangalaLandmark;
