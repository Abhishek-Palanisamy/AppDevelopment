import React from 'react'
import '../Assets/CSS/HomePage.css';
import CallIcon from '@mui/icons-material/Call';

import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/userSlice';
function Sidebar1() {
  const dispatch=useDispatch();
  const nav=useNavigate("");
  const logouthandler=()=>{
    dispatch(logout())
    nav("/")
  }
  const home=()=>{
    nav("/home")
  }
  const aboutus=()=>{
    nav("/aboutus")
  }

  const contact=()=>{
    nav("/contactus")
  }
  return (
    <>
    <div className='side'>

     <button className='leftbarbtn' onClick={home}><HomeIcon color='inherit'  fontSize='medium' /><h4>Home</h4></button>
     <button className='leftbarbtn' onClick={contact}><CallIcon color='inherit'  fontSize='medium' /><h4>Contact</h4></button>
     <button className='leftbarbtn' onClick={aboutus}><GroupIcon color='inherit'  fontSize='medium' /><h4>About Us</h4></button>
     <button className='leftbarbtn' onClick={logouthandler}> <LogoutIcon color='inherit' fontSize='medium' /><h4>Logout</h4></button>
    </div>
    </>
    )
}

export default Sidebar1