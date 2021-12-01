import React, { Component, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, Row, Col, Image } from 'react-bootstrap';

import SlidPortfolio from "./slider";

import PortfolioLi from './PortfolioList'

import './portfolio.css'


const Portfolio = () => {

    return (
        <div className="portfolio pt-100" id="portfolio">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="section-title">
                            <h6 className="subtitle">PORTFOLIO</h6>
                            <h2 className="title">My Recent Web Design & Some Past Projects.</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className="portfolio-slid pt-5"> 
                            <PortfolioLi/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
