import React, { useState } from 'react';
import './LS.css'

function SignUp() {
  const [prompt, setPrompt] = useState('Have an Account? <a href="/login">LogIn<a/>')

  return (
    <div className='page'>
    <div className='lsbox'>
      <h1>Sign Up</h1>
      <div className='fieldline'>
        <legend>First Name:</legend>
        <input type={"text"} />
      </div>
      <div className='fieldline'>
        <legend>Last Name:</legend>
        <input type={"text"}  />
      </div>
      <div className='fieldline'>
        <legend>Email Address:</legend>
        <input type={"email"}  />
      </div>
      <div className='fieldline'>
        <legend>Phone:</legend>
        <input type={"tel"} />
      </div>
      <div className='fieldline'>
        <legend>Password:</legend>
        <input type={"password"} minLength={8} />
      </div>
      <div className='fieldline'>
        <legend>Password Again:</legend>
        <input type={"password"} minLength={8} />
      </div>
      <div className='fieldline'>
        <button> Sign Up </button>
      </div>
      <div className='promptarea' dangerouslySetInnerHTML={{__html: prompt}} />
    </div>
    </div>
  )
}

export default SignUp