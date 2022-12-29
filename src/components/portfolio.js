import React from 'react';
import { Button } from 'reactstrap';
import MovingUp from '../portfolio/moving-up.webp';
import Insight1 from '../portfolio/insight1.webp';
import Insight2 from '../portfolio/insight2.webp';
import PinkPurple from '../portfolio/pink-purple.webp';
import TurtleLogo from '../images/turtle-pngrepo-com.webp';

const sendMail = () => {
    window.open('mailto:cobaltturtlecreatives@gmail.com?subject=Cobalt Inquiries');
}

const Portfolio = () => {
    return (
        <>
            <body className='App'>
                <div>
                    <h1 className='p-5'>Examples Portfolio</h1>
                </div>
                <div>
                    <img src={MovingUp} alt='Panels with ads for credit repair' className='col-md-6 col-12' height='auto' ></img>
                </div>
                <div className='mt-3'>
                    <img src={TurtleLogo} height='90px' alt="Turtle icon" id='turtle1'></img><p>Increase web traffic!</p>
                    <img src={Insight1} alt='Panel outlining increase in web traffic' className='col-6 col-sm-3 p-1' height='auto'></img>
                    <img src={Insight2} alt='Additional panel outlining increase in web traffic' className='col-6 col-sm-3 p-1' height='auto'></img>
                </div>
                <div className='mt-3 mb-3'>
                    <img src={TurtleLogo} height='90px' alt="Turtle icon" id='turtle2'></img><p>Connect with customers!</p>
                    <img src={PinkPurple} alt='Panel with several ads and motivational statements' height='auto'></img>
                </div>
                <div>
                    <h3>Like what you see?</h3>
                    <h3>See more here - </h3>
                    <i className='fa fa-instagram fa-4x'></i>
                    <br />
                    <a href="https://instagram.com/stories/cobalturtlemediacreator/2971095744246930149?utm_source-ig_story_item_share&igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" style={{ fontSize: 24 }}>@cobalturtlemediacreator</a>
                    <h3 className='mt-3'>More questions?</h3>
                    <Button color='primary' size='lg' className='mb-3' onClick={sendMail}>Let's Connect!</Button>
                </div>
            </body>
        </>
    )
}

export default Portfolio;