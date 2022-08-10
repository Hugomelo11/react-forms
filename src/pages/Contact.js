import { useState } from "react";
import { Button, Modal} from "react-bootstrap";

import Form from "../components/Form";

const Contact = () => {
    const [show, setShow] = useState(false)
    const [stateFromChild, setStateFromChild] = useState('')
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    console.log("stateFromChild =>", stateFromChild)

  return (
    <>
    
      <h3>This is contact</h3>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form setShow={handleClose} ronsProps='Call it My Form'/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  );
};

export default Contact;
