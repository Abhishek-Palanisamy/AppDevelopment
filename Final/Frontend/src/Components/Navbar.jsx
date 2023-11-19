import React, { useState } from 'react'
import '../Assests/CSS/Navbar.css'
import '../Assests/CSS/Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import logo from '../Assests/Images/Hotel Tulip2.png'


function Navbar() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  return (
    <>
    <nav className="nav1">
    <label htmlFor="click">
    <div className="menu-icon">
      <div className="line line-1" />
      <div className="line line-2" />
      <div className="line line-3" />
    </div>
  </label>
      <a href="/home" className="nav__brand">
      <img src={logo} />
      </a>
      <ul className='name'>
      
        <li className="nav__item">
          <a href="#" className="nav__link">
            <b style={{fontSize:"18px"}}>{username}!</b>
          </a>
        </li>

      </ul>
   
    </nav>
    </>
  )
}

export default Navbar