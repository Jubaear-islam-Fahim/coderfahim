import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './footer.css';

import Logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className="pt-100 footer">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="footer-content">
                            <a href="#"><Image src={Logo}/></a>
                            <p>© 2021. All rights reserved by <a href="https://coderfahim.netlify.app/">Coder Fahim</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
