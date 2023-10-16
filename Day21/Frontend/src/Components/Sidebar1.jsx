import React, { useEffect } from 'react'
import '../Assets/CSS/HomePage.css';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import {  useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CryptoJS from 'crypto-js';
function Sidebar1() {
 
  const nav=useNavigate("");
  

useEffect(()=>{
 
  try {
    const parts = token.split('.');
    const decodedPayload = CryptoJS.enc.Base64.parse(parts[1]).toString(CryptoJS.enc.Utf8);
    console.log(decodedPayload);
    const parsedPayload = JSON.parse(decodedPayload);
    if (parsedPayload.exp) {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (parsedPayload.exp < currentTimestamp) {
        alert("Session Expired. Please Login again....!")
        localStorage.clear();
        nav("/")
      }
    } else {
      console.log('JWT does not contain an expiration claim (exp).');
    }
  } catch (error) {
    console.error('Error decoding JWT:', error);
  }
},[])

function logout() {
 
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  alert("Logged out!!")
  window.location.href = '/'; 
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
  const booking=()=>{
    nav("/booking")
  }
  return (
    <>
    <div className='side'>

     <button className='leftbarbtn' onClick={home}><HomeIcon color='inherit'  fontSize='medium' /><h4>Home</h4></button>
     <button className='leftbarbtn' onClick={contact}><CallIcon color='inherit'  fontSize='medium' /><h4>Contact</h4></button>
     <button className='leftbarbtn' onClick={aboutus}><GroupIcon color='inherit'  fontSize='medium' /><h4>About Us</h4></button>
     <button className='leftbarbtn' onClick={booking}><FavoriteIcon color='inherit'  fontSize='medium' /><h4>Booking</h4></button>
     <button className='leftbarbtn' onClick={logout}> <LogoutIcon color='inherit' fontSize='medium' /><h4>Logout</h4></button>
    </div>
    </>
    )
}

export default Sidebar1
