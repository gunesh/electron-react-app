import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Lemon from "./Projects/Lemon";
import Ruchi from "./Projects/Ruchi";
import HighwayBlossom from "./Projects/HighwayBlossom";
import HighwayParadise from "./Projects/HighwayParadise";
import HighwayParamount from "./Projects/HighwayParamount";
import HighwaySereneCity from "./Projects/HighwaySereneCity";
import HighwaySkyCity from "./Projects/HighwaySkyCity";
import MangalaLandmark from "./Projects/MangalaLandmark";

const About = () => {
  const [open, setOpen] = React.useState("1");
  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  // page content
  const pageTitle = "Projects";
  const pageDescription = "Current Projects";

  return (
    <div>
      <Meta title={pageTitle} />
      {/* <Header head={pageTitle} description={pageDescription} /> */}

      <div className="starter-template ">
        <h1>{pageTitle}</h1>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                {" "}
                LEMON CITY UJJAIN ROAD
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <Lemon />
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                {" "}
                RUCHI TOWN( BAJRANG PALIYA)
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <Ruchi />
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="3"> Highway Blossom</AccordionHeader>
              <AccordionBody accordionId="3">
                <HighwayBlossom />
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="4"> Highway Sky City</AccordionHeader>
              <AccordionBody accordionId="4">
                <HighwaySkyCity />
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="5"> Highway Paradise</AccordionHeader>
              <AccordionBody accordionId="5">
                <HighwayParadise />
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="6">
                {" "}
                Highway Serene City{" "}
              </AccordionHeader>
              <AccordionBody accordionId="6">
                <HighwaySereneCity />
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="7">
                {" "}
                Highway Paramount{" "}
              </AccordionHeader>
              <AccordionBody accordionId="7">
                <HighwayParamount />
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="8">
                {" "}
                Mangala Landmark (#2BHK #3bhk Luxury Residential Apartment){" "}
              </AccordionHeader>
              <AccordionBody accordionId="8">
              <MangalaLandmark />
              </AccordionBody>
            </AccordionItem>

            {/* <AccordionItem>
              <AccordionHeader targetId="3"> Highway Paramount </AccordionHeader>
              <AccordionBody accordionId="3">
                <div>
                  <h2>Highway Paramount   </h2>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-md-3">
                      
                    </div>
                    <div className="col-md-6">
                      <div className="row"></div>
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </AccordionItem> */}
          </Accordion>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default About;
