import React, { Component } from "react";
import Slider from "react-slick";
import { Image } from "react-bootstrap"; 

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import RoktimHtml from '../../assets/img/work/roktim.jpg'; 
import Buildhex from '../../assets/img/work/buildhex.jpg';
import Trined from '../../assets/img/work/trinet.jpg';
import xipper from '../../assets/img/work/xipper.jpg';
import fitner from '../../assets/img/work/fitner.jpg';
import secrius from '../../assets/img/work/secrius.jpg';
import pichaora from '../../assets/img/work/pichaora.jpg';
import monteck from '../../assets/img/work/monteck.jpg';
import Outdoorizm from '../../assets/img/work/Outdoorizm.jpg';
import jobllow from '../../assets/img/work/jobllow.jpg';

export const PortList = [
  {
    id: 1,
    image: RoktimHtml,
    url: 'https://skdevbd.com/codexexpert/TF-ITEM/roktim/RoktimHtml/index.html' 
  },
  {
    id: 2,
    image: Buildhex,
    url: 'http://thesoftking.com/html/buildhex/' 
  },
  {
    id: 3,
    image: Trined,
    url: 'https://www.trinetdigital.com/' 
  },
  {
    id: 4,
    image: xipper,
    url: 'https://thepixelcurve.com/html/xipper/index-2.html' 
  },
  {
    id: 5,
    image: fitner,
    url: 'https://raistheme.com/html/fitner/index-1.html' 
  },
  {
    id: 6,
    image: secrius,
    url: 'https://raistheme.com/html/secrius/secrius/index.html' 
  },
  {
    id: 7,
    image: pichaora,
    url: 'https://www.pikrana.com/pichaora-app-landing-page/home-v1.html' 
  },
  {
    id: 8,
    image: monteck,
    url: 'http://brotherslab.thesoftking.com/html/monteck/' 
  },
  {
    id: 9,
    image: Outdoorizm,
    url: 'https://outdoorizm.com/' 
  },
  {
    id: 10,
    image: jobllow,
    url: 'https://jobllow.com/' 
  },
]

export default class SlidPortfolio extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const protSlid = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
      <div className="portfolioContent">
        <Slider ref={c => (this.slider = c)} {...protSlid}>
          
             
          {
              PortList.map((link)=>{
                  return (
                    <div className="portfolioItem"> 
                      <div className="portfolioLink"> 
                        <a href={link.url} key={link.id} target="_blank"> 
                            <Image src={link.image} />
                        </a>
                      </div>
                    </div>
                  )
              })
          }
        </Slider>
        <div className="portfolioButton mt-4">
          <button className="button" onClick={this.previous}>
            <FaChevronLeft/>
          </button>
          <button className="button" onClick={this.next}>
            <FaChevronRight/>
          </button>
        </div>
      </div>
    );
  }
}