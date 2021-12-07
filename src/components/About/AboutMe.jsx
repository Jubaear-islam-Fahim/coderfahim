import React from 'react';
import Cv from '../../assets/img/Fahim-CV.pdf';

const AboutMe = () => {
    return (
        <div className="aboutMe-content pt-4">
            <p>
                Hey! I'm Jubaear Islam Fahim. Definitely, shortly <h1>Coder Fahim</h1>, a young and creative web developer. Currently, I’m living in Dhaka, Bangladesh. Besides professional certification, I’m a self-learner and love a lot to explore and implement new skills.

            </p>
            <p>
                Already experienced four years of working in different Web Development fields. Later I designed 30+ website themes on Themeforest. Meantime I also completed more than 200 projects on the marketplace (i.e Fiverr, UpWork). Next, I have done a contractual project in TheSoftKing. Currently, I am working as a Jr. Web Developer in Trinet Digital.

            </p>
            <p>
                The journey on this road could not be easy for me without the guidance and assistance of my brothers and teammates. Additionally, I can not but mention my clients who supported me and loved me.

            </p>
            <ul className="d-flex gap-3 pt-lg-5">
                <li><a href={Cv} className="button button--hyperion" download><span><span>Download CV </span></span></a>  </li>
                <li><a href="#contact" className="button button--hyperion"><span><span>My Works</span></span></a>  </li>

            </ul>
        </div>
    )
}

export default AboutMe
