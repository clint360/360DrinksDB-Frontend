import React from 'react'
import SideBar from './SideBar/SideBar'

function Profile() {
  return (
    <div style={{display: 'flex'}}>
    <div>
      <SideBar />
    </div>
    <div className="main" style={{paddingLeft: '10px'}}>
     <h1>Profile</h1>
     <div className="profileinfo">
      <h3>Your Information</h3>
      First Name: <br />
      Last Name: <br />
      Email Address: <br />
      Phone Number: <br />
      <br />
      <button style={{padding: '5px 10px'}}>EDIT</button>
     </div>
     <div className="profileinfo">
     <h3>Edit Information </h3>
      First Name: <input /> <br />
      Last Name: <input /> <br />
      Email Address: <input /> <br />
      Phone Number: <input /> <br />
      Forgot Password? <input type={'password'} /> <br />
      Password again: <input type={'password'} />
      <br />
      <br />
      <button style={{padding: '5px 10px'}}>SAVE</button>
      </div>
    </div>
    </div>
    )
}

export default Profile