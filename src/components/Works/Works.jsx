import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import WorkImg from '../../assets/img/about-bg.png';

import './worksStyle.css';

const Work = () => {
    return (
        <div className="work-area pt-100">

            <Container> 
                <Row className="pt-5">
                    <Col lg={6}>
                        <div className="section-titles">
                            <h6 className="subtitle">work for</h6>
                            <h2 className="title">Happy Client I Workd For Them</h2>
                        </div>
                        <div className="work-content">
                            <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupt atum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            <a href="#" className="theme-btn btn-md mt-5">Hir Me</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="work-content">
                            <div className="work-item">
                                <Image src="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Work
