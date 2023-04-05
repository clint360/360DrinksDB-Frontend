import React, { useState } from 'react'
import Add from '../Components/Add'
import BigModal from '../Components/BigModal'
import Card from '../Components/Card'
import SideBar from './SideBar/SideBar'
import './Styles/Drinks.css'

function Drinks() {
  const [showModal, setShowModal] = useState(true)

  return (
    <div style={{display: 'flex'}}>
    <div>
      <SideBar />
    </div>
    <div className="main" style={{paddingLeft: '10px', height: '100vh', marginLeft: '275px'}}>
     <h1>Drinks</h1>
     <section id="drinkmaps">
      <BigModal showModal={showModal} setShowModal={setShowModal}/> 
      <Card onView={()=>{setShowModal(true)}} />
      <Card />
      <Card />
      <Add />
     </section>
    </div>
    </div>
    )
}

export default Drinks