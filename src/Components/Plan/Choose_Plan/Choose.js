import React     from 'react'
import { Link } from 'react-router-dom';
import './Choose.css';
import { FaAngleRight } from "react-icons/fa6";
import { assets } from '../../../assets/asset';
const Choose = () => {  
  return (
    <div className='choose '>
        <img src={assets.netflix} alt='' className='logo' />
        <hr className='hr' />
        <h1 className='content-head'>Choose the plan that’s right for you</h1>   

        <div className='card-groups d-flex justify-content-evenly'>
            <div className="card" >
                <div className="card-body card-option">
                    <li className="card-text">Video and sound quality</li>
                    <li className='card-text2'>480p</li>
                </div>
                <div className="card-body">
                    <li className="card-text">Supported devices</li>
                    <li className='card-text2'>Mobile phone</li>
                </div>
                <hr />
                <div className="card-body">
                    <li className="card-text">Devices your household can watch the same time</li>
                    <li className='card-text2'>1</li>
                </div>
                <hr />
                <div className="card-body">
                    <li className="card-text">Devices your household can watch the same time</li>
                    <li className='card-text2'>1</li>
                </div>
                
            </div>

            <div className="card" >
                <div className="card-body card-option">
                    <li className="card-text">Video and sound quality</li>
                    <li className='card-text2'>720p</li>
                </div>
                <div className="card-body">
                    <li className="card-text">Supported devices</li>
                    <li className='card-text2'>Mobile phone, tablet</li>
                </div>
                <hr />
                <div className="card-body">
                    <li className="card-text">Devices your household can watch the same time</li>
                    <li className='card-text2'>2</li>
                </div>
                <hr />
                <div className="card-body">
                    <li className="card-text">Devices your household can watch the same time</li>
                    <li className='card-text2'>1</li>
                </div>
            </div>

            <div className="card" >
                <div className="card-body card-option">
                    <li className="card-text">Video and sound quality</li>
                    <li className='card-text2'>1080p</li>
                </div>
                <div className="card-body">
                    <li className="card-text">Supported devices</li>
                    <li className='card-text2'>Mobile phone, tablet</li>
                </div>
                <hr />
                <div className="card-body">
                    <li className="card-text">Devices your household can watch the same time</li>
                    <li className='card-text2'>2</li>
                </div>
                <hr />
                <div className="card-body">
                    <li className="card-text">Devices your household can watch the same time</li>
                    <li className='card-text2'>3</li>
                </div>
            </div>
        </div>
         <Link to='/signup/plan/netflix-movie'><button type="submit" className='submits'>Get Started <FaAngleRight /></button></Link> 
        <p className='description'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
</p>
    </div>
  )
}

export default Choose

