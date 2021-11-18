import React, { Component } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

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
import yesmart from '../../assets/img/work/yesmart.jpg';
import adshunt from '../../assets/img/work/adshunt.jpg';
import schoolferris from '../../assets/img/work/schoolferris.jpg';

 
class App extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          data:  [
            {
                id: 1,
                image: RoktimHtml,
                url: 'https://skdevbd.com/codexexpert/TF-ITEM/roktim/RoktimHtml/index.html'
            },
            {
                id: 2,
                image: yesmart,
                url: 'https://yesmart.netlify.app/'
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
            {
                id: 11,
                image: Buildhex,
                url: 'http://thesoftking.com/html/buildhex/'
            },
            {
                id: 12,
                image: adshunt,
                url: 'https://adshunt.netlify.app/'
            },
            {
                id: 13,
                image: schoolferris,
                url: 'https://schoolferris.netlify.app/'
            },
          ],
          visible: 8,
          
        };
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore() {
        this.setState((prev) => {
        return {visible: prev.visible + 4};
        });
    }
    
   
    render() {
     
      return (
      
        <>
          
            <div className="portfolioContent">                         
                {
                    this.state.data.slice(0, this.state.visible).map((result) => {
                    return ( 
                        <div className="portfolioItem">
                            <div className="portfolioLink">
                                <a href={result.url} key={result.id} target="_blank">
                                    <Image src={result.image} />
                                </a>
                            </div>
                        </div>
                    )
                    })
                }
                
            </div>

            {
                this.state.visible < this.state.data.length &&
                <div className="text-center mt-5">
                    <a onClick={this.loadMore} type="button" className="button button--hyperion"><span><span>load more</span></span></a>

                </div>
            }
               
       
        </>
        
    )};
}
export default App;