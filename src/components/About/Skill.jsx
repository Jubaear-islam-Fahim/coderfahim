import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const ProgressBarList = [
    {
        id: 1,
        title: 'Html',
        number: 99,
    },
    {
        id: 2,
        title: 'Css',
        number: 99,
    },
    {
        id: 3,
        title: 'Scss',
        number: 99,
    },
    {
        id: 4,
        title: 'Bootstrap',
        number: 90,
    },
    {
        id: 5,
        title: 'ReactJs',
        number: 60,
    },
    {
        id: 6,
        title: 'WordPress',
        number: 70,
    },
    {
        id: 6,
        title: 'WordPress',
        number: 70,
    },
    {
        id: 7,
        title: 'SHOPIFY',
        number: 60,
    },
   
]

const Skill = () => {
    return (
        <div className="skills pt-4">
            <div className="skill-desc">
                <p>
                    I am a highly-skilled front-end developer. Here is a shortlist of my skills, and again I enjoy learning more.
                </p>
            </div>
            {
                ProgressBarList.map((list) => {
                    return (
                        <div className="progressbar-item" id={list.id}>
                            <div className="ProgressBar-title d-flex">
                                <div className="h6">{list.title}</div>
                                <div className="h6 ms-auto">{list.number}%</div>
                            </div>
                            <ProgressBar now={list.number} />
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Skill
