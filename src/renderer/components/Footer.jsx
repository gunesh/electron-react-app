import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { Newsletter } from "../cmps";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="ready-to-move">
        Are you looking for Ready-to-move-in Or Under Construction property?
        <Link to="/contact">
          <button
            type="button"
            className="btn btn-outline-primary me-2 call-request"
          >
            Request for Call <i className="fa fa-phone " />
          </button>
        </Link>
      </div>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-4">
                <div className="footer-pad">
                  <h4>Quick Links</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="">
                        
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/project" className="">
                        Our Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="">
                        Contact US
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-pad">
                  <h4>Connect with US</h4>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-phone"></i> &nbsp; +91 7987892157
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i> &nbsp;
                      alpinerealtors@gmail.com
                    </li>
                    <li>
                      <a
                        className="whatsapp"
                        rel="noreferrer"
                        href="https://wa.me/917987892157?text=Hi Alpine Plots"
                        target="_blank"
                      >
                        <i className="fa fa-whatsapp"></i> &nbsp; 7987892157
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="footer-pad">
                  <h4>New Project Newsletter Sign-Up</h4>
                  <Newsletter />
                </div>
              </div>
              <div className="col-md-2">
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright {year} - Alpine Realtors. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 
      <footer className="footer text-center text-capitalize">
        copyright Alpine Realtors &copy; {year}
      </footer> */}
    </>
  );
};

export default Footer;
