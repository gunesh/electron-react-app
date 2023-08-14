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

const Lemon = (props) => {
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
      src: require("../../assets/lemon/1.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/2.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/3.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/4.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/5.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/6.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/7.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/8.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/9.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/10.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/11.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/12.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/13.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/14.jpeg"),
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: require("../../assets/lemon/15.jpeg"),
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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="project-info">
      <h2>LEMON CITY UJJAIN ROAD </h2>
      <div className="row">
        <div className="col-md-6">
          <p>Ready To Move Project</p>
          <p>Starting Plot Size</p>
          <p>800 sq.ft. upto 1500 sq.ft.</p>
          <p>Rate: ₹ 2750 / sq.ft.</p>
          <p>Prime Location 10%</p>
          <p>No Hidden Charges No Maintainance</p>
          <p>Only Registry Charge Excluded Under Gram Panchayat.</p>
          <p>
            Near by: Aurbindo Hospital, Super Corridor, TCS & Infos., Medical
            Hub, International AirPort,, Metro, ISBT, Palia Railway Station.
            DPS, & Mount Carmal School, Vaishnav & Modern Inst. College.
          </p>
          <p>UpComing Project: </p>
          <p>Amusement, Water Park & Resort. @. Palia.</p>
          <p>
            Praposed ByPass Road Link to Ujjain, Dewas, Ratlam, Jhabua, Dhar,
            Khargone, Khandwa, Mahoo, Rau. ByPass Four Lane RingRoad.
          </p>
          {/* <p></p>
         
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p> */}
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-3">
              {" "}
              <Image
                src={require("../../assets/lemon/1.jpeg")}
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
                src={require("../../assets/lemon/2.jpeg")}
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
                src={require("../../assets/lemon/3.jpeg")}
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
                src={require("../../assets/lemon/4.jpeg")}
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
                src={require("../../assets/lemon/5.jpeg")}
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
                src={require("../../assets/lemon/6.jpeg")}
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
                src={require("../../assets/lemon/7.jpeg")}
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
                src={require("../../assets/lemon/8.jpeg")}
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
                src={require("../../assets/lemon/9.jpeg")}
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
                src={require("../../assets/lemon/10.jpeg")}
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
                src={require("../../assets/lemon/11.jpeg")}
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
                src={require("../../assets/lemon/12.jpeg")}
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
                src={require("../../assets/lemon/13.jpeg")}
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
                src={require("../../assets/lemon/14.jpeg")}
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
                src={require("../../assets/lemon/15.jpeg")}
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
          </div>

          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89463.00537694813!2d75.80292524579208!3d22.790059444746564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963039a9fb46439%3A0x500c2a8d02e75619!2sLemon%20City!5e0!3m2!1sen!2sin!4v1682766652875!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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

export default Lemon;
