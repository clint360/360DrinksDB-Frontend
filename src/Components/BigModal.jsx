import React, { useEffect, useState } from 'react';
import './BigModal.css'

function BigModal({
    modalType,
    showModal, 
    setShowModal}) 
    {
    const modalStyle = {
        display: showModal === false ? 'none' : 'flex',
    }

  return (
    <div className='bigmodal' style={modalStyle}>
      <div className="bigmodal-modal">
        <div className="close-modal" style={{userSelect: 'none'}} onClick={()=>{setShowModal(false)}}>X</div>
        Yooo
      </div>
    </div>
  )
}

export default BigModal
