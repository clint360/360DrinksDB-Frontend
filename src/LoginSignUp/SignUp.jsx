import React, { useState } from 'react';
import LandingNav from '../Landing/LandingNav/LandingNav';
import './LS.css'

function SignUp() {
  const [prompt, setPrompt] = useState({
    text: 'Have an Account? <a href="/login">LogIn<a/>',
    color: 'black'
  })

  const handleSignUp = (e) => {
    e.preventDefault();
   if(e.target.password.value !== e.target.confirmPassword.value) {
    setPrompt({
      text: 'Passwords Do Not Match',
      color: 'red'
    }) 
   } else {
    let user = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
   }
  }

  return (<>
    <LandingNav />
    <div className='page'>
    <div className='lsbox'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
      <div className='fieldline'>
        <legend>First Name:</legend>
        <input type={"text"} name={'firstName'} required/>
      </div>
      <div className='fieldline'>
        <legend>Last Name:</legend>
        <input type={"text"} name={'lastName'} required/>
      </div>
      <div className='fieldline'>
        <legend>Email Address:</legend>
        <input type={"email"} name={'email'} required/>
      </div>
      <div className='fieldline'>
        <legend>Phone:</legend>
        <input type={"number"} name={'phone'} required/>
      </div>
      <div className='fieldline'>
        <legend>Password:</legend>
        <input type={"password"} minLength={8} name={'password'} required/>
      </div>
      <div className='fieldline'>
        <legend>Password Again:</legend>
        <input type={"password"} minLength={8} name={'confirmPassword'} required/>
      </div>
      <div className='fieldline'>
        <button type='submit'> Sign Up </button>
      </div>
      </form>
      <div style={{color: prompt.color }}  className='promptarea' dangerouslySetInnerHTML={{__html: prompt.text}} />
    </div>
    </div>
    </>)
}

export default SignUp