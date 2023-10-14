import React from 'react'
import '../Assets/CSS/HomePage.css'
import '../Pages/AboutUs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/userSlice'

function Navbar1() {
  const nav=useNavigate("");
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  const aboutus=()=>{
    nav("/aboutus")
  }
  const hom=()=>{
    nav("/home")
  }
  return (
    <>
    <nav>
    <div>
    <ul id='navbar'>

    <li>
    <span style={{cursor:'pointer'}}> Welcome {username}!</span>
    </li>
    </ul>
    </div>
    </nav>
    </>
  )
}

export default Navbar1