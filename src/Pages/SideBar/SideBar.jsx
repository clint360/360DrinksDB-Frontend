import React from 'react';
import './SideBar.css';
import logo from '../../Assets/longlogo.png'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className="logosection">
        <img src={logo} alt={'longlogo'} />
      </div>
      <div className="listsection">
         <ul type='none'>
         <li><i class="fa-solid fa-house-chimney"></i><div>Home</div></li>
         <li><i class="fa-solid fa-wine-bottle"></i><div>Drinks </div></li>
         <li><i class="fa-regular fa-rectangle-list"></i><div>Categories</div></li>
         <li><i class="fa-solid fa-mortar-pestle"></i><div>Ingredients</div></li>
         <li><i class="fa-solid fa-wine-glass-empty"></i><div>Glasses</div></li>
         <li><i class="fa-solid fa-user"></i><div>Profile</div></li>
         <li><i class="fa-solid fa-right-from-bracket"></i><div>Logout</div></li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
