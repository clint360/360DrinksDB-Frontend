import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

function Card({onView}) {
   const [usertype, setUserType] = useState('admin')

   useEffect(()=>{
    if (usertype === null) {
    
    }
   },[])

  const cardStyle = {
    background: 'white',
    width: '150px',
    height: '210px',
    border: '1px solid grey',
    borderRadius: '10px'
  }
  
  const imageStyle = { 
    width: '100%',
    height: '110px'
  }

  const detailsStyle = {
    height: '65px',
    with: '100%',
    padding: '5px 5px',
    fontSize: '14px',
    lineHeight: '16px'
  }

  return (
    <div style={cardStyle}>
      <div className="image" style={imageStyle} onClick={onView}>
       <img src={''} alt=""style={{width: '100%', height: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} />
      </div>
      <div className="details" style={detailsStyle}>
     <span style={{fontWeight: 'bold', color: 'grey'}}>Red Wine Classic </span> <br />
     <span style={{fontStyle: 'italic'}}>Soft Drink </span><br />
      <br />
     <span style={{fontSize: '12px', fontStyle: 'italic'}}>Chia Clint Animbom</span>
      
      </div>
      <div className="actions" style={{display: 'flex', justifyContent: 'space-between', padding: '0 5px', fontSize: '14px'}}>
      <div><a href='#view'>View</a></div>
      { usertype === 'admin' ?
        <>
      <div onClick={onView}><a href='#view'>Edit</a></div>
      <div><a href='#view'>Delete</a></div>
        </> :
        <></>
      }
    </div>
      </div>
  )
}

export default Card