import React from "react";
import Popup from "./Popup";

import "./menu.css";

const Connect = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        {" "}
        For more information call us: <i className="fa fa-phone " /> +91 7987
        892 157
      </div>{" "}
      <div className="col-md-4">
        {" "}
        Connect with{" "}
        <a
          className="whatsapp"
          rel="noreferrer"
          href="https://wa.me/917987892157?text=Hi Alpine Plots"
          target="_blank"
        >
          <i className="fa fa-whatsapp"></i> &nbsp; 7987892157
        </a>
      </div>
      <div className="col-md-4 text-end">
         <Popup />
        
      </div>
    </div>
  );
};

export default Connect;
