import React from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import { Contact } from "../cmps";

const About = () => {
  // page content
  const pageTitle = "Contact-us";
  const pageDescription = "Contact us for more information";

  return (
    <div>
      <Meta title={pageTitle} />
      {/* <Header head={pageTitle} description={``} /> */}
      <div className="starter-template ">
        <h1>{pageTitle}</h1>

        <div className="formik">
          <div className="row">
            <div className="col-md-6">
              <div style={{ padding: "10px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.--> */}
                  <path
                    fill="brown"
                    d=" M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                  />
                </svg>
              </div>
            </div>
            <div className="col-md-6">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
