import React from 'react';
import './LandingNav.css';
import longlogo from '../../Assets/longlogo.png'
import { Link } from 'react-router-dom';

function LandingNav() {
  return (
    <div className='landingNavbar'>
    <div className="left">
   <div className="imgdiv"><img src={longlogo} alt='Long Logo'/></div>  
    </div>
    <div className="right">
        <ul type='none'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/explore'}>Explore</Link></li>
            <li><Link to={'/api-docs'}>API Docs</Link></li>
            <li><Link to={'/signup'}>Sign Up</Link></li>
            <li><Link to={'/login'}>Sign In</Link></li>
        </ul>
    </div>
    </div>
  )
}

export default LandingNav
