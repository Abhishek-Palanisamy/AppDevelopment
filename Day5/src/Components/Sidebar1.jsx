import React from 'react'
import '../Assets/CSS/HomePage.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import KitchenIcon from '@mui/icons-material/Kitchen';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/userSlice';
function Sidebar1() {
  const dispatch=useDispatch();
  const nav=useNavigate("");
  const profile=()=>{
    nav("/profile")
  }
  const travel=()=>{
    nav("/travel")
  }
  const logouthandler=()=>{
    dispatch(logout())
    nav("/")
  }
  const dashboard=()=>{
    nav("/dashboard")
  }
  return (
    <>
    <div className='side'>
    <button className='leftbarbtn' onClick={profile}> <AccountCircleIcon color='inherit' fontSize='medium' />
    <h4>Profile</h4></button>
    <button className='leftbarbtn' onClick={dashboard}> <DashboardIcon color='inherit' fontSize='medium' />
    <h4>Dashboard</h4></button>
     <button className='leftbarbtn'><a href='#contact'><CallIcon color='inherit'  fontSize='medium' /><h4>Contact</h4></a></button>
     <button className='leftbarbtn' onClick={travel}><EmojiTransportationIcon color='inherit' fontSize='medium'/><h4>Travel</h4></button>
     <button className='leftbarbtn'><a href='#locator'> <LocationOnIcon color='inherit' fontSize='medium' /><h4>Location</h4></a></button>
     <button className='leftbarbtn' onClick={logouthandler}> <LogoutIcon color='inherit' fontSize='medium' /><h4>Logout</h4></button>
    </div>
    </>
    )
}

export default Sidebar1