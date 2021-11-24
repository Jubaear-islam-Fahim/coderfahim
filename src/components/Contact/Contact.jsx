import React from 'react';
import { Container, Row, Col, Image, FloatingLabel, Form, Button } from 'react-bootstrap';
// import Map from './Map';
import './contact.css';

import Mapimg from '../../assets/img/map.png';
import { FiFacebook, FiLinkedin, FiInstagram, FiDownloadCloud } from "react-icons/fi";
  
const Contact = () => {
    return (
        <div className="contact pt-100" id="contact"> 
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="section-title">
                            <h6 className="subtitle">Contact</h6>
                            <h2 className="title">Get In Touch</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col lg={12}>
                        <div className="contact-form-area">
                            <div className="contact-form">
                                <Form name="coderFahim" method="POST" data-netlify="true" action="/success/">
                                    <input type="hidden" name="form-name" value="coderFahim" />
                                    <div className="contact-content">
                                        <FloatingLabel controlId="floatingName" label="YOUR NAME" className="form6">
                                            <Form.Control type="text" name="name" placeholder="YOUR NAME" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingName" label="PHONE NUMBER" className="form6">
                                            <Form.Control type="number" name="number" placeholder="PHONE NUMBER" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingName" label="EMAIL" className="form12">
                                            <Form.Control type="email" name="email" placeholder="EMAIL" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingName" label="SUBJECT" className="form12">
                                            <Form.Control type="text" name="text" placeholder="SUBJECT" />
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingTextarea" label="YOUR MESSAGE" className="message form12">
                                            <Form.Control as="textarea" name="message" placeholder="YOUR MESSAGE" />
                                        </FloatingLabel>
                                        <Button variant="primary" type="submit" className="theme-btn btn-md form12">
                                            SEND MESSAGE
                                        </Button>
                                    </div>

                                </Form>
                            </div>
                            <div className="contact-about">
                                <address className="contact-address">
                                    <div className="map">
                                        <Image src={Mapimg} width="100%" />
                                    </div>
                                    <div class="h4 title">Contact <span>Information</span></div>
                                    <ul>
                                        <li>
                                            <strong>Address:</strong> 
                                            <a>Shusoma Store, 2B / 20A pallabi, 11.5 Dhaka 1216, Dhaka 1216</a>
                                        </li>
                                        <li>
                                            <strong>Email:</strong> 
                                            <a href="mailto:fahim221999@gmail.com" target="_top">fahim221999@gmail.com</a>
                                        </li>
                                        <li>
                                            <strong>Call Us:</strong> 
                                            <a href="tel:01795785469"> 0179-578-5469</a>
                                        </li>
                                        <li>
                                            <strong>Skype:</strong> 
                                            <a href="skype:jubaearislam86664?chat"> jubaearislam86664</a>
                                        </li>
                                    </ul>
                                    {/* <p><strong>Working Hours:</strong> 9 AM - 6 PM (Mon to Sat)</p> */}
                                </address>
                                <div class="social-share-inner">
                                    <div class="title">find with me</div>
                                    <ul>
                                        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100006226397799"><FiFacebook/></a></li>
                                        <li><a target="_blank" href="https://twitter.com/JubaearFahim"><FiLinkedin/></a></li>
                                        <li><a target="_blank" href="https://www.instagram.com/jubaearfahim/"><FiInstagram/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact