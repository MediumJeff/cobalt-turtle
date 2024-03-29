import React from 'react'
import phoneImg from '../images/PhoneImg.webp';
import dogPic from '../images/DogPic.webp';

const About = () => {
  return (
    <>
      <div className='App'>
        <div>
          <h1>Who is Cobalt Turtle?</h1>
        </div>
        <div id='image'>
          <img height='500px' src={phoneImg} alt="Josey at U of Oregon" className='mt-5'></img>
        </div>
        <div id='bio'>
          <p className="col-sm-8 offset-sm-2">Hi! Welcome to Cobalt Turtle! My name is Josey and I graduated from University of Oregon in 2021 with a Bachelors Degree in Advertising, Marketing, and Campaigns. I created Cobalt Turtle as an aspiring content creator with the goal to assist small business owners in creating Social Media content, logos, videos, digital ads, audience targeting, and more! Your goal is my goal as I absolutely love being a part of YOUR success!</p>
        </div>
        <div id='dog'>
          <img src={dogPic} height='250px' className='mt-5' alt='Bruce the Dog'></img>
          <p className='col-sm-8 offset-sm-2 mt-2'>When I moved to Las Vegas, I decided to switch things up a bit. What better way to do this than rescuing a doggo! This is Bruce! I rescued Bruce in October of 2021; rescuing him exactly 12 hours before the time of his euthanizing appointment. I am his fourth (and last) owner & best friend. Or shall I say, he's MY best friend. As times get tough, I love swooping in for the save!</p>
        </div>
      </div>
    </>
  )
}

export default About;