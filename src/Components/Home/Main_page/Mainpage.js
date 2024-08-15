import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; 
import './Mainpage.css';
import { assets } from '../../../assets/asset.js';
import About from '../About/About.js';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";

const Mainpage = ({setShowLogin}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

  };

  return (
    <>
    <div className='body'>
      <div className='home'>
        <div className='nav d-flex  flex-row justify-content-between'>
          <img src={assets.netflix} className='netflix-logo' alt='' />
          <div>
                <select onChange={(e) => changeLanguage(e.target.value)} className='translation'>
                    <option value="en">English</option>
                    <option value="ta">Tamil</option>
                </select>
                <Link to='/signup'><button className='sign-in'>Sign in</button></Link> 
          </div>
        </div>

        <div className='home_content' >
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>
            <p>{t('description2')}</p> 
        </div>
        
        <form className='d-flex flex-row'>
            <input
              type="email"
              placeholder="Email address"
              className='form-input'
              required
            />
            <button type="submit" className='submit'>Get Started <FaAngleRight /></button>
          </form>   
      </div>
    </div>
    <hr id='hr-line' />
        <About />        
    </>     
  );
};

export default Mainpage;
         