import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { Button } from "reactstrap";

const Home = (args) => {
  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      {/* <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} /> */}

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="400px"
            src={require("../assets/home/1.png")}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <Link to="/contact">
              <button className="btn btn-primary get-quote">Contact us</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="400px"
            src={require("../assets/home/2.png")}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <Link to="/contact">
              <button className="btn btn-primary get-quote"> Contact us</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            height="400px"
            src={require("../assets/home/3.png")}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <Link to="/contact">
              <button className="btn btn-primary get-quote"> Contact us</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <div className="container1 home-container text-center">
        <h3>Our Projects</h3>
        <br />
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <Link to="/lemon-city" title="Click here for more information">
                <img
                  className="card-img-top img-responsive"
                  src={require("../assets/page/lemon.jpeg")}
                  alt="Lemon City"
                />
                <div className="card-body">
                  <h5 className="card-title">Lemon City</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <Link to="/ruchi-town" title="Click here for more information">
                <img
                  className="card-img-top img-responsive"
                  src={require("../assets/page/ruchi.png")}
                  alt="Ruchi Town"
                />
                <div className="card-body">
                  <h5 className="card-title">Ruchi Town</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <Link to="/highway-blossom" title="Click here for more information">
                <img
                  className="card-img-top img-responsive"
                  src={require("../assets/page/Highway Blossom.png")}
                  alt="Highway Blossom"
                />
                <div className="card-body">
                  {" "}
                  <h5 className="card-title">Highway Blossom</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <Link to="/highway-paradise" title="Click here for more information">
                <img
                  className="card-img-top img-responsive"
                  src={require("../assets/page/Highway Paradise.png")}
                  alt="Highway Paradise"
                />
                <div className="card-body">
                  {" "}
                  <h5 className="card-title">Highway Paradise</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <Link to="/highway-paramount" title="Click here for more information">
                <img
                  className="card-img-top img-responsive"
                  src={require("../assets/page/Highway Paramount.png")}
                  alt="Highway Paramount"
                />
                <div className="card-body">
                  {" "}
                  <h5 className="card-title">Highway Paramount</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <Link to="/highway-serene-city" title="Click here for more information">
                <img
                  className="card-img-top img-responsive"
                  src={require("../assets/page/Highway Serene City.png")}
                  alt="Highway Serene City"
                />
                <div className="card-body">
                  <h5 className="card-title">Highway Serene City</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <Link to="/highway-sky-city" title="Click here for more information">
                <img
                  className="card-img-top img-responsive"
                  src={require("../assets/page/Highway Sky City.png")}
                  alt="Highway Sky City"
                />
                <div className="card-body">
                  {" "}
                  <h5 className="card-title">Highway Sky City</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <Link to="/mangala-landmark" title="Click here for more information">
                <img
                  className="card-img-top img-responsive"
                  src={require("../assets/page/Mangala Landmark.png")}
                  alt="Mangala Landmark"
                />
                <div className="card-body">
                  <h5 className="card-title">Mangala Landmark</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div></div>
    </div>
  );
};

export default Home;
