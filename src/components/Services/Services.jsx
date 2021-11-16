import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ServicesLis from './ServicesList';

import './servicesStyle.css';

const Services = () => {

    const [items, setItem] = useState(ServicesLis);

    return (
        <>

            <div className="services-area pt-100" id="services">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="section-title">
                                <h6 className="subtitle">What I can do for you</h6>
                                <h2 className="title">My Awesome Service</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={12}>
                            <div className="services-content pt-5">
                                {
                                    items.map((ServicesEleme) => {
                                        const { id, images, titles, description } = ServicesEleme;

                                        return (
                                            <div class="features-item text-center" id={id}>
                                                <div className="features-i">
                                                    <Image src={images} className="features-img" />
                                                </div>
                                                <h5 className="title pb-3 pt-4">{titles}</h5>
                                                <p className="text">{description}</p>
                                            </div>


                                        )
                                    })
                                }
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>


        </>
    )
}

export default Services
