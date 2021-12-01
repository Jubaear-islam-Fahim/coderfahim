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
                url: 'https://themeforest.net/item/roktim-digital-marketing-html-template/25715482?s_rank=1'
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
                url: 'https://themeforest.net/item/xipper-html-landing-page-template-for-app-saas-products/24254599'
            },
            {
                id: 5,
                image: fitner,
                url: 'https://themeforest.net/item/fitner-creative-html-template-for-gym-fitness-health/24773757'
            },
            {
                id: 6,
                image: secrius,
                url: 'https://themeforest.net/item/secrius-security-services-multipurpose-html-template/25752171?s_rank=1'
            },
            {
                id: 7,
                image: pichaora,
                url: 'https://themeforest.net/item/pichaora-app-laning-page-html5-template/22572136'
            },
            {
                id: 8,
                image: monteck,
                url: 'https://www.thesoftking.com/item/monteck-sports-club-html-template/206'
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
                url: 'https://www.thesoftking.com/item/buildhex-construction-renovation-interior-html-template/155'
            },
            {
                id: 12,
                image: adshunt,
                url: 'https://themeforest.net/item/adshunt-classified-and-listing-html5-template/22819901'
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