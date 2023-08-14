import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Connect from "../../components/Connect";

const Ruchi = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const items = [
    {
      src: require("../../assets/ruchi/1.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/2.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/3.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/4.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/5.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/6.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/7.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/8.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/9.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/10.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/11.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/12.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/13.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/14.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/15.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/16.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/17.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/18.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/ruchi/19.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
  ];

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-responsive" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="project-info">
      <h2>RUCHI TOWN( BAJRANG PALIYA) </h2>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-md-3">
          {/* <img src={require("../../assets/ruchi/rate.PNG")} /> */}
          {/* <Image
            src={require("../../assets/ruchi/rate.PNG")}
            className="img-thumb img-responsive"
            fluid={false}
            title="Click here to see photo"
            rounded={false}
            roundedCircle={false}
            thumbnail={true}
            bsPrefix={`img`}  onClick={()=>{onImageClick()}}
          /> */}
          <p>Rate -2721/- rs per sqft</p>
          <p>Electricity-60 rs per sqft </p>
          <p>Maintenance-45rs per sqft (for 3 years)</p>
          <p>Club membership-75000/- each (mandatory)</p>
          <p>For corner-5%(PLC) </p>
          <p>For Garden -5%(PLC)</p>
          <p>For mazor road-5%(PLC)</p>
          <p>For Corner+garden -10%(PLC)</p>
          <p>For Corner+garden+mazor road-15%(PLC)</p>
          <h6>Payment schedule</h6>
          <p>Booking amount-100000/- rs</p>
          <p>With in 10-15 days of booking-25%(including booking amount)</p>
          <p>On development permission- 25%</p>
          <p>After 3 months of development permission-25%</p>
          <p>After 3 months final amount-25%</p>{" "}
        </div>
        <div className="col-md-6">
          {/* <h2>Project Photos</h2> */}
          <div className="row">
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/1.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              <Image
                src={require("../../assets/ruchi/2.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/3.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/4.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>

            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/5.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/6.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/7.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/8.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>

            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/9.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              <Image
                src={require("../../assets/ruchi/10.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/11.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              <Image
                src={require("../../assets/ruchi/12.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>

            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/13.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/14.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/15.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              <Image
                src={require("../../assets/ruchi/16.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>

            <div className="col-md-3">
              <Image
                src={require("../../assets/ruchi/17.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>
            <div className="col-md-3">
              <Image
                src={require("../../assets/ruchi/18.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/ruchi/19.jpeg")}
                className="img-thumb img-responsive"
                fluid={false}
                title="Click here to see photo"
                rounded={false}
                roundedCircle={false}
                thumbnail={true}
                bsPrefix={`img`}
                onClick={toggle}
              />
            </div>

            <div className="iframe-container">
              <iframe
                className="responsive-iframe"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d98259.20523919725!2d75.7947069552014!3d22.800967323352836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sruchi%20town%20indore!5e0!3m2!1sen!2sin!4v1682767052058!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* <Slider
            items={[
              {
                src: require("../../assets/ruchi/1.jpeg"),
                altText: "Slide 1",
                caption: "Slide 1",
                key: 1,
              },
              {
                src: require("../../assets/ruchi/2.jpeg"),
                altText: "Slide 2",
                caption: "Slide 2",
                key: 2,
              },
              {
                src: require("../../assets/ruchi/3.jpeg"),
                altText: "Slide 3",
                caption: "Slide 3",
                key: 3,
              },
            ]}
          /> */}
        </div>
      </div>
      <div className="row connect-us">
        <Connect />
      </div>
      <Modal
        isOpen={modal}
        className="modal-xl"
        toggle={toggle}
        {...props}
        backdrop={"static"}
      >
        <ModalHeader toggle={toggle}>Project Images</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...props}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </div>{" "}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Ok
          </Button>{" "}
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Ruchi;
