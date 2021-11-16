import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';


import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio'; 
// import Works from './components/Works/Works';
import Testimonial from './components/Testimonial/Testimonial';
import Pricing from './components/Pricing/Pricing';
// import Features from './components/Features/Features';
// import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'; 

 
const App = () => {
 

    return (
        <> 
            <Header /> 
            <Banner/>
            <About />
            <Services/>
            <Portfolio/>
            {/* <Works/> */}
            <Testimonial/>
            <Pricing/>
            {/* <Features/>
            <Blog/> */}
            <Contact/>
            <Footer/> 
        </>
    )
}

export default App
