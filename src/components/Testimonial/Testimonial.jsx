import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Slider from "react-slick";
import './testimonial.css';

import ReviewLists from './ReviewsList';

const Testimonial = () => {

    const settings = {
        dots: true,
        slickNext: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="testimonial pt-100" id="testimonial">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="section-title">
                            <h6 className="subtitle">Testimonial</h6>
                            <h2 className="title">Awesome Reviews My Client Saying About Me</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="reviews-content pt-5">

                            <Slider
                                {...settings}
                            >
                                {
                                    ReviewLists.map((link) => {
                                        return (
                                            <div className="reviews-item" id={link.id}>
                                                <div className="reviews-ss">

                                                    <div className="client-profile">
                                                        <Image src={link.images} />
                                                        <div className="client-text">
                                                            <div className="h6 name">
                                                                {link.name}
                                                            </div>
                                                            <div class="date">{link.time}</div>
                                                        </div>
                                                    </div>
                                                    <p class="description">
                                                        {link.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                            </Slider>




                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial;
