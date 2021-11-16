import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Image, Offcanvas, Button } from 'react-bootstrap';
import Logo from '../../assets/img/logo.png';

import { Links } from './menuList';

import Scrollspy from 'react-scrollspy';

const Nab = () => {
  const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1);
        });
    }, []);

  return (
    <>
      <Navbar expand="lg" className={scroll ? 'sticky-top':''} id="top_nav">
        <Container>
            <Navbar.Brand href="/">
                <Image src={Logo} /> 
            </Navbar.Brand>
            <Navbar.Collapse >
                <Nav className="ms-auto navList">

                    <Scrollspy items={ ['banner', 'about', 'services', 'portfolio', 'contact'] } currentClassName="active">
                        {/* <li><a href="#banner">Home</a></li>   
                        <li><a href="#about">About</a></li>   
                        <li><a href="#services">Services</a></li>   
                        <li><a href="#portfolio">Portfolio</a></li>   
                        <li><a href="#contact">Contact</a></li>      */}
                        <li> 
                          {
                                Links.map((link)=>{
                                    return (
                                        <Nav.Link href={link.url} key={link.id}>
                                            {link.text}
                                        </Nav.Link>
                                    )
                                })
                            }
                        </li>     
                        
                    </Scrollspy>
                      
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>  
    </>
  );
}

export default Nab
