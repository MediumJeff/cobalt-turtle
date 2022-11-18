import React from 'react';
import { Button } from 'reactstrap';
import Header from './navbar';
import MovingUp from '../portfolio/moving-up.png';
import Insight1 from '../portfolio/insight1.png';
import Insight2 from '../portfolio/insight2.png';
import PinkPurple from '../portfolio/pink-purple.png';
import TurtleLogo from '../images/turtle-pngrepo-com.png';

const sendMail = () => {
    window.open('mailto:cobaltturtlecreatives@gmail.com?subject=Cobalt Inquiries');
}

const Portfolio = () => {
    return (
        <>
            <Header />
            <body style={{ background: 'lightblue', fontFamily: 'Oxygen', textAlign: 'center' }}>
                <div>
                    <h1 className='p-5'>Examples Portfolio</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='column'>
                            <img src={MovingUp} alt='Panels with ads for credit repair' className='col-md-6 col-12'></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column mt-3'>
                            <img src={TurtleLogo} style={{ height: 75, rotate: "90deg" }} alt="Turtle icon"></img><p style={{ fontSize: 24 }}>Increase web traffic!</p>
                            <img src={Insight1} alt='Panel outlining increase in web traffic' className='col-6 col-sm-3 p-1'></img>
                            <img src={Insight2} alt='Additional panel outlining increase in web traffic' className='col-6 col-sm-3 p-1'></img>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='column mt-3 mb-3'>
                    <img src={TurtleLogo} style={{ height: 75, rotate: "-90deg" }} alt="Turtle icon"></img><p style={{ fontSize: 24 }}>Connect with customers!</p>
                        <img src={PinkPurple} alt='Panel with several ads and motivational statements'></img>
                    </div>
                </div>
                <div>
                    <h3>Like what you see?</h3>
                    <h3>See more here - </h3>
                    <i className='fa fa-instagram fa-4x'></i>
                    <br/>
                    <a href="https://instagram.com/stories/cobalturtlemediacreator/2971095744246930149?utm_source-ig_story_item_share&igshid=YmMyMTA2M2Y=" style={{ fontSize: 24 }}>@cobalturtlemediacreator</a>
                    <h3 className='mt-3'>More questions?</h3>
                    <Button color='primary' size='lg' className='mb-3' onClick={sendMail}>Let's Connect!</Button>
                </div>
            </body>
        </>
    )
}

export default Portfolio;