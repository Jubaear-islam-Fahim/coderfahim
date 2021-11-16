import React, {setShow, useState} from 'react';
import { Navbar, Container, Nav, Image, Offcanvas, Button } from 'react-bootstrap';

const Nab = () => {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>

        


      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>


        
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Nab
