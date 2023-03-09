import React, { useState } from 'react';
import './LS.css'

function LogIn() {
  const [prompt, setPromt ] = useState("Don't have an Account? <a href='/login'>Sign Up</a>")

  return (
    <div className='page'>
      <div className="lsbox">
      <h1>Log In</h1>
      <div className='fieldline'>
        <legend>Email Address:</legend>
        <input type={"email"}  />
      </div>
      <div className='fieldline'>
        <legend>Password:</legend>
        <input type={"password"} minLength={8} />
      </div>
      <div className='fieldline'>
        <button> Log In </button>
      </div>
      <div className='promptarea' dangerouslySetInnerHTML={{__html: prompt}} />
      </div>
    </div>
  )
}

export default LogIn