import React from 'react'
import LandingNav from './LandingNav';
import './APIDocs.css'

function APIDocs() {
  return (
    <div>
    <LandingNav />
    <div className="apidocs">
        <iframe src = 'https://petstore.swagger.io/' />
    </div>
    </div>
  )
}

export default APIDocs
