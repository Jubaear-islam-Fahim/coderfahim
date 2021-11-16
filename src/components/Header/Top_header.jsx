import React from 'react';

import {Container, Row, Col, ListGroup } from 'react-bootstrap';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaSkype } from "react-icons/fa";
 
import './header.css';

function Top_header() {
    return (
        <div className="header-area" id="banner">
            <Container> 
                <Row>
                    <Col xs={12} md={6}>
                        <div className="header-left">
			                <ul className="d-flex gap-4">
			                    <li><a href="tel:01795785469"><strong>Call Us:</strong> 0179-578-5469</a></li> 
			                    <li><a href="mailto:fahim221999@gmail.com"><strong>Email:</strong> fahim221999@gmail.com</a></li>
			                </ul>
			            </div>
                    </Col> 
                    <Col xs={12} md={6}>
                        <ul className="social-list ">
                            <li><a href=""><FaFacebookF/></a></li>
                            <li><a href=""><FaTwitter/></a></li>
                            <li><a href=""><FaLinkedinIn/></a></li> 
                            <li><a href=""><FaSkype/></a></li> 
                        </ul> 
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Top_header
