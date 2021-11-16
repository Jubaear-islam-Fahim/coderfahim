import React from 'react';
import { Container, Row, Col, Image, Tab, Nav, Tabs  } from 'react-bootstrap';

import AboutImg from '../../assets/img/about-bg.png'; 
import './aboutStyle.css';

import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skill';
import Education from './Education';

const About = () => {
    return (
        <div className="about-area pt-100" id="about">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="section-title">
                            <h6 className="subtitle">My About Details</h6>
                            <h2 className="title">A Little About Me and My Passion</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="item-gap pt-5">
                    <Col lg={5}>
                        <div className="about-images">
                            <Image src={AboutImg} />
                        </div>
                    </Col>
                    <Col lg={{span: 6, offset: 1}}>
                        <div className="about-content pt-5"> 
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={12}>
                                        <Nav variant="pills" className="d-flex about-btn">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">About Me</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Experience</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Skill</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth">Education</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <AboutMe />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Experience /> 
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Skills /> 
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <Education /> 
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
