import React, {useState} from 'react';

import { Image } from 'react-bootstrap'; 

import { FaHtml5, FaCss3Alt, FaJsSquare, FaWordpressSimple, FaShopify, FaReact, FaSass, FaLess, FaGitAlt, FaGithubSquare, FaPhp, FaBootstrap } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";


const experienceList = [
    {
        id: 1,
        icon: <FaHtml5 />, 
        description: 'HTML5'
    },
    {
        id: 2,
        icon: <FaCss3Alt />, 
        description: 'CSS3'
    }, 
    {
        id: 3,
        icon: <FaSass />, 
        description: 'SASS'
    },
    {
        id: 4,
        icon: <FaBootstrap />, 
        description: 'Bootstrap'
    },
    {
        id: 5,
        icon: <FaJsSquare />, 
        description: 'jQuery'
    },
    {
        id: 6,
        icon: <FaReact />, 
        description: 'REACT'
    },
    {
        id: 7,
        icon: <FaWordpressSimple />, 
        description: 'WORDPRESS'
    },
    {
        id: 8,
        icon: <FaShopify />, 
        description: 'SHOPIFY'
    },
    {
        id: 9,
        icon: <FaGitAlt />, 
        description: 'GIT'
    },
    {
        id: 10,
        icon: <FaGithubSquare />, 
        description: 'GitHub'
    },
    {
        id: 11,
        icon: <SiNetlify />, 
        description: 'Netlify'
    },
    {
        id: 12,
        icon: <FaPhp />, 
        description: 'PHP'
    },
    

]

const Experience = () => {
    const [items , setItem] = useState(experienceList);
    
    return ( 
        <div className="experience pt-4"> 
            <div className="experience-text">
                <p>Already I have been covered the major programming languages in my previous works. As a professional, I follow all the web development life cycle through my projects.</p>
            </div> 
            {
                items.map((experienceEleme) => {
                    const {id, icon, description} = experienceEleme;
                    return (
                        <div className="experience-item" id={id}>
                            <i>{icon}</i>
                            <h6 className="title">{description}</h6>
                        </div>
                        // <div className="experience-item d-flex gap-3" id={id}>
                        //     <div className="experience-img">
                        //         <Image src={images}/>
                        //     </div>
                        //     <div className="experience-text align-self-center">
                        //         <p className="text">{titles}</p>
                        //         <h6 className="title">{description}</h6>
                        //     </div>
                        // </div>
                    )
                })
            }

  
            {/* <div className="experience-item d-flex gap-3">
                <div className="experience-img">
                    <Image src={WebDesign}/>
                </div>
                <div className="experience-text align-self-center">
                    <p className="text">2017 - 2021 (Web Design)</p>
                    <h5 className="title">Web Design</h5>
                </div>
            </div>  */}


        </div>
    )
}

export default Experience
