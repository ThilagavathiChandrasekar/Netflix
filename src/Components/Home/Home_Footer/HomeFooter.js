import React from 'react'
import './HomeFooter.css';
const HomeFooter = () => {
  return (
    <>
      <div className='footer container'>
        <div className='container'>
          <div className='row'>
              <div className='footer1 col col-lg-3 col-md-6 col-sm-6'>
                <ul>
                  <li>FAQ</li>
                  <li>Investor Relation</li>
                  <li>Privacy</li>
                  <li>Speed Test</li>
                  </ul>
              </div>
              <div className='footer2 col col-lg-3 col-md-6 col-sm-6'>
                <ul>
                  <li>Help Centers</li>
                  <li>Jobs</li>
                  <li>Cookies Preferece</li>
                  <li>Legal Notice</li>
                </ul>
              </div>
              <div className='footer3 col col-lg-3 col-md-6 col-sm-6'>
                <ul>
                  <li>Account</li>
                  <li>Ways to Watch</li>
                  <li>Corporete Information</li>
                  <li>Only on Netflix</li>
                </ul>
              </div>
              <div className='footer4 col col-lg-3 col-md-6 col-sm-6'>
                <ul>
                  <li>Media Center</li>
                  <li>Term of Use</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <p className='footer-sub-content'>Netflix India</p>
          </div>
        </div>
      </div>
     </>
  )
}

export default HomeFooter;