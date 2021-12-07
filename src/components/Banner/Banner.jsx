import React from 'react';
import {Col, Container, Row, Image } from 'react-bootstrap';

import '../Banner/banner.css';

import Typical from 'react-typical';
import { FiFacebook, FiLinkedin, FiInstagram, FiDownloadCloud} from "react-icons/fi";
import { DiHtml5, DiCss3, DiSass, DiNodejsSmall} from "react-icons/di";

import BannerImg from '../../assets/img/banner.png';
import Cv from '../../assets/img/Fahim-CV.pdf';

function Banner() {
    return (
        <div className="banner-area">
            <Container>
                <Row>
                    <Col lg={{span: 4, offset: 2}} className="banner-col">
                        <div className="banner-profile-img">
                            <Image src={BannerImg} className="profile images" alt="coder fahim" width="100%" />
                        </div>
                    </Col>
                    <Col lg={6} className="banner-col">
                        <div className="banner-content">
                            <div className="banner-text-top">
                                <div className="subtitle">WELCOME TO MY WORLD</div>
                                <div className="title h1">
                                    Hi, I’m <strong>Fahim</strong> <br/>
                                    <i>a</i>  
                                    <Typical
                                        steps={['Web Designer.', 1000, 'Front-end Developer.', 1000, 'Professional Coder.', 1500]}
                                        loop={Infinity}
                                        wrapper="span" 
                                    />
                                </div> 
                                <p>I am an expert Web Designer and Professional Coder. Also, I have gained comprehensive experience in coding, designing, markup languages, and different things related to the programming area. Always I keep myself updated with the new string of coding and browser compatibility. Personally, I love learning and implementing new skills.  </p>
                                <a href={Cv} className="button button--hyperion mt-5" download><span><span>Download CV </span></span></a>  
                                
                            </div>

                            <div className="banner-text-footer">
                                <div class="social-share-inner">
                                    <div class="title">find me</div>
                                    <ul>
                                        <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100006226397799"><FiFacebook/></a></li>
                                        <li><a target="_blank" href="https://twitter.com/JubaearFahim"><FiLinkedin/></a></li>
                                        <li><a target="_blank" href="https://www.instagram.com/jubaearfahim/"><FiInstagram/></a></li>
                                    </ul>
                                </div>
                                <div class="social-share-inner">
                                    <div class="title">BEST SKILL ON</div>
                                    <ul>
                                        <li><a href="#"><DiHtml5/></a></li>
                                        <li><a href="#"><DiCss3/></a></li>
                                        <li><a href="#"><DiSass/></a></li>
                                        <li><a href="#"><DiNodejsSmall/></a></li>
                                    </ul>
                                </div> 
                            </div>
                            {/* <button class="button button--hyperion"><span><span>New page</span></span></button> */}
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div> 
    )
}

export default Banner
