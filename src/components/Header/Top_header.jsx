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
                            <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100006226397799"><FaFacebookF/></a></li>
                            <li><a target="_blank" href="https://twitter.com/JubaearFahim"><FaTwitter/></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/jubayer-islam-fahim-b78912164/"><FaLinkedinIn/></a></li> 
                            <li><a target="_blank" href="skype:jubaearislam86664?chat"><FaSkype/></a></li> 
                        </ul> 
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Top_header
