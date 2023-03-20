import React from 'react'
import LandingNav from './LandingNav/LandingNav'
import './LandingPage.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <LandingNav />
            <section className="land">
                <div className="welcome">
                   <div className="imgdiv"><img src={logo} alt='logo' /></div> 
                    <div className='text'> 
                        Welcome to The360Drinks Database!
                        <br />
                        <br />
                        An open, crowd-sourced well Categorised database of drinks and cocktails from around the world. Including Recipes, Glasses.
                        We also offer a free JSON API for anyone wanting to use it.
                        If you like the site, please consider supporting us on Patreon by clicking the link below...
                    <br />
                    <br />
                    <button className='explorebutton'><Link to={'/explore'}>Explore</Link></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage
