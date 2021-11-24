import React, { useEffect, useState } from 'react';

import { Navbar, Container, Nav, Image, Offcanvas, Button } from 'react-bootstrap';

import TopHeader from '../Header/Top_header';
import { Links } from './menuList';

import Logo from '../../assets/img/logo.png';

import '../Header/header.css'; 
 
import Scrollspy from 'react-scrollspy';

import { FaBars } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiInstagram, FiDownloadCloud} from "react-icons/fi";
import { DiHtml5, DiCss3, DiSass, DiNodejsSmall} from "react-icons/di";


const Header = () => {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);

    return (
        <>

            <TopHeader />

            <Navbar expand="lg" className={scroll ? 'sticky-top':''} id="top_nav">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={Logo} /> 
                    </Navbar.Brand> 
                    <Button className="ms-auto navbar-toggler" variant="primary" onClick={handleShow}> <FaBars/> </Button>
                    <Navbar.Collapse>  
                        <Scrollspy items={ ['banner', 'about', 'services', 'portfolio', 'contact'] } currentClassName="active" className="ms-auto navbar-nav"> 
                            {
                                Links.map((link)=>{
                                    return (
                                        <li key={link.id}><Nav.Link href={link.url}>{link.text}</Nav.Link></li> 
                                    )
                                })
                            }    
                        </Scrollspy>
                              
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

            <Offcanvas show={show} onHide={handleClose} className="sidebar-menu">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><Image src={Logo} /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                        <Scrollspy items={ ['banner', 'about', 'services', 'portfolio', 'contact'] } currentClassName="active" className="ms-auto navbar-nav"> 
                            {
                                Links.map((link)=>{
                                    return (
                                        <li key={link.id}><Nav.Link href={link.url} onClick={handleShow}>{link.text}</Nav.Link></li> 
                                    )
                                })
                            }    
                        </Scrollspy>
                        
                        
                </Offcanvas.Body>
                    <div class="social-share-inner p-4 text-center right-social"> 
                        <ul className="align-item-center justify-content-center">
                            <li><a href="#"><FiFacebook/></a></li>
                            <li><a href="#"><FiLinkedin/></a></li>
                            <li><a href="#"><FiInstagram/></a></li>
                        </ul>
                        <p className="pt-4">© 2021. All rights reserved by Coder Fahim</p>
                    </div>
            </Offcanvas>



        </>
    )
}

export default Header
