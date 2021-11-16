import React, {useState} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FeaturesLis from './Features-list';

import './jeatures.css'; 

const Features = () => {

    const [items , setItem] = useState(FeaturesLis);

    return (
        <>
        
        <div className="services-area pp-100" id="features">
            <Container>
                <Row className="justify-content-md-center ">
                    <Col lg="5">
                        <div className="section-title text-center">
                            <h2 className="pb-3">Our Best Features</h2>
                            <p>Natus error sit voluptatem accusantium doloremque laudantium, totam eaque ipsa quae ab illo inventore veritatis et .</p>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3}>
                    
                    {
                        items.map((featuresEleme) => {
                            const {id, images, titles, description} = featuresEleme;

                            return (
                                <div class="features-item mt-5">   
                                    <div className="features-i"> 
                                        <Image src={images} className="features-img" />
                                    </div>
                                    <h5 className="title pb-2 pt-3">{titles}</h5>
                                    <p className="Text">{description}</p>
                                </div>
                                
    
                            )
                        })
                    } 
                </Row> 
            </Container>
        </div>
  
 
        </>
    )
}
 
export default Features
