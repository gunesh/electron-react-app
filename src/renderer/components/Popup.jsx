import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Contact } from "../cmps";

const Popup = ({}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Link to="/contact">
          <button
            type="button"
            className="btn btn-outline-primary me-2 get-quote"
          >
            GET QUOTE
          </button>
        </Link> */}

      <Button
        className="btn btn-outline-primary me-2 get-quote"
        onClick={toggle}
      >
        {" "}
        GET QUOTE
      </Button>
      <Modal isOpen={modal} toggle={toggle} backdrop={"static"}>
        <ModalHeader toggle={toggle}>Contact-us</ModalHeader>
        <ModalBody>
          <Contact />
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default Popup;
