import React from 'react';
import './LandingNav.css';
import longlogo from '../../Assets/longlogo.png'

function LandingNav() {
  return (
    <div className='landingNavbar'>
    <div className="left">
   <div className="imgdiv"><img src={longlogo} alt='Long Logo'/></div>  
    </div>
    <div className="right">
        <ul type='none'>
            <li>Home</li>
            <li>Explore</li>
            <li>API Docs</li>
            <li>Sign Up</li>
            <li>Sign In</li>
        </ul>
    </div>
    </div>
  )
}

export default LandingNav
