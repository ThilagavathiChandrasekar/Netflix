import React from 'react'
import './About.css';
import { assets } from '../../../assets/asset';
import Question from '../Question/Question';
const About = () => {
  return (
    <>
    <div className='container-fluid'>
          <div className=' about about-1' >
              <div className='about-img-content col-lg-6 col-md-6 col-sm-12' >
                <h1>Enjoy on your TV</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and  more.</p>
              </div>
              <div className='secImg'>
              <img src={assets.tv} alt='' id='about-img1' className='about-img col-lg-6 col-md-6 col-sm-12' />
              <video
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                autoPlay
                loop
                muted
              ></video>
              </div>      
          </div>
          <hr className='hr-line' />

          <div className=' about about-2 row'>
            <img src={assets.phone} alt='' className='about-img col-lg-6 col-md-6 col-sm-12' />
              <div className='about-img-content col-lg-6 col-md-6 col-sm-12'>
                <h1>Download your  shows to watch  offline</h1>
                <p>Save your favourites easily and always have   something to watch.</p>
              </div>
          </div>
          <hr className='hr-line' />

          <div className=' about about-3 row'>
              <div className='about-img-content col-lg-6 col-md-6 col-sm-12'>
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your   phone, tablet, laptop, and TV.</p>
              </div>
              <img src={assets.tv2} alt='' className='about-img col-lg-6 col-md-6 col-sm-12' />
          </div>
          <hr className='hr-line' />

          <div className=' about about-4 row'>
            <img src={assets.children} alt='' className='about-img col-lg-6 col-md-6 col-sm-12' />
              <div className='about-img-content col-lg-6 col-md-6 col-sm-12'>
                <h1>Create profiles for kids</h1>
                <p>end children on adventures with their   favourite characters in a space made just for   them—free with your membership.</p>
              </div>
          </div>
          <hr className='hr-line' />
      </div>
    <Question />
    </>
  )
}

export default About
