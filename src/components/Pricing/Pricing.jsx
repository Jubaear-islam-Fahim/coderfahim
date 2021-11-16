import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './pricing.css';

const Pricing = () => {
    return (
        <div className="pricing pt-100" id="pricing">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="section-title">
                            <h6 className="subtitle">Pricing</h6>
                            <h2 className="title">My Pricing Plans</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-5">
                    <Col lg={12}>
                        <div className="pricing-content">
                            <div className="pricing-item">
                                <div className="pricing-top">
                                    <h4 className="pricing-name">
                                        Intro
                                    </h4>
                                    <div className="pricing-title">
                                        <div className="h1 price-text">$12 <sup>/Month</sup></div>
                                        <p>Making this the first true generator on the Internet. It uses a dictionary .</p>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>Responsive Design</li>
                                        <li>Design Customization</li>
                                        <li>Psd to Html</li>
                                        <li>Html to Reactjs</li>
                                        <li>Content Upload</li>
                                    </ul>
                                </div>
                                <div className="pricing-btn"> 
                                    <a href="#" className="theme-btn btn-md">Choose Plan</a> 
                                    <span>2 Days Delivery</span>
                                </div>
                            </div>
                            <div className="pricing-item">
                                <div className="pricing-top">
                                    <h4 className="pricing-name">
                                        Pro
                                    </h4>
                                    <div className="pricing-title">
                                        <div className="h1 price-text">$12 <sup>/Month</sup></div>
                                        <p>Making this the first true generator on the Internet. It uses a dictionary .</p>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>Responsive Design</li>
                                        <li>Design Customization</li>
                                        <li>Psd to Html</li>
                                        <li>Html to Reactjs</li>
                                        <li>Content Upload</li> 
                                    </ul>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="theme-btn btn-md">Choose Plan</a>
                                    <span>2 Days Delivery</span>
                                </div>
                            </div>
                            <div className="pricing-item">
                                <div className="pricing-top">
                                    <h4 className="pricing-name">
                                        Base
                                    </h4>
                                    <div className="pricing-title">
                                        <div className="h1 price-text">$12 <sup>/Month</sup></div>
                                        <p>Making this the first true generator on the Internet. It uses a dictionary .</p>
                                    </div>
                                    <ul className="pricing-list">
                                        <li>Responsive Design</li>
                                        <li>Design Customization</li>
                                        <li>Psd to Html</li>
                                        <li>Html to Reactjs</li>
                                        <li>Content Upload</li>
                                    </ul>
                                </div>
                                <div className="pricing-btn">
                                    <a href="#" className="theme-btn btn-md">Choose Plan</a>
                                    <span>2 Days Delivery</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pricing
