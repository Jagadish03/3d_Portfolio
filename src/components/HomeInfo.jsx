import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-x1 text-center'>{text}</p> 
       <Link to ={link} className='neo-brutalism-white neo-btn'>{btnText}
       <img src={arrow} className='w-4 h-4 object-contain' />
       </Link>
    </div>
)

//^ renderContent is used whenever we move island it has to show different message at different places
const renderContent ={            //& object
    1:(                           //& content
        <h1 className='sm:text-xl sm:leading-sung text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Jagadish</span>👋 <br/>
        A MERN Developer from India !!
        </h1>
    ),
    2:(                           //& content
        <InfoBox 
        text="Enthusiastic recent B.E graduate in Computer Science with a strong foundation in Front-End and Back-End Development. Eager to contribute my fresh perspectives and dedication to excellence. Discover more about my journey by clicking 'Learn More' below."
        link='/about'
        btnText="Learn More" 
        />
    ),
    3:(                           //& content
        <InfoBox 
        text='Built multiple projects. Curious about the impact?' 
        link='/projects'
        btnText="Visit to Projects" 
    />
    ),
    4:(                           //& content
        <InfoBox 
        text="'Need a project done or looking for a dev? I'm just a few keystrokes away!!!" 
        link='/contact'
        btnText="Let's talk 🤗" 
    />
    ),
}

const HomeInfo = ({currentStage}) => {  //& as props we are getting currentStage
  return renderContent[currentStage] || null;
}

export default HomeInfo