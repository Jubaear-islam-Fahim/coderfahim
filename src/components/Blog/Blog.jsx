import React, {useState} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import BlogLis from './blogList';

import './blogStyle.css'; 

const Blog = () => {

    const [items , setItem] = useState(BlogLis);

    return (
        <>
        
        <div className="Blog-area pp-100" id="blog">
            <Container>
                <Row className="justify-content-md-center ">
                    <Col lg="5">
                        <div className="section-title text-center">
                            <h2 className="pb-3">Our Blog</h2>
                            <p>Natus error sit voluptatem accusantium doloremque laudantium, totam eaque ipsa quae ab illo inventore veritatis et .</p>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} lg={3}>
                    
                    {
                        items.map((BlogEleme) => {
                            const {id, images, titles, description} = BlogEleme;

                            return (
                                 <></>
                                
    
                            )
                        })
                    } 
                </Row> 
            </Container>
        </div>
  
 
        </>
    )
}
 
export default Blog
