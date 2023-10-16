import React from 'react'
import '../Assets/CSS/Admin.css';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CallIcon from '@mui/icons-material/Call';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { logout } from '../Redux/userSlice';
function AdminSidebar() {
  const dispatch=useDispatch();
  const nav=useNavigate("");
  const logouthandler=()=>{
    dispatch(logout())
    nav("/")
  }
  const dashboard=()=>{
    nav("/dashboard")
  }


  const reservedlist=()=>{
    nav("/list")
  }
  const feedback=()=>{
    nav("/feedbacklist")
  }
  const query=()=>{
    nav("/contactlist")
  }
  const registered=()=>{
    nav("/registered")
  }
  return (
    <>
    <div className='side'>

     <button className='leftbarbtn' onClick={dashboard}><DashboardIcon color='inherit' fontSize='small'/><h4>Dashboard</h4></button>
     <button className='leftbarbtn' onClick={reservedlist}><ChecklistIcon color='inherit' fontSize='small'/><h4>Reserved List</h4></button>
     <button className='leftbarbtn' onClick={registered}><HowToRegIcon color='inherit' fontSize='small'/><h4>Registered List</h4></button>
     <button className='leftbarbtn' onClick={feedback}><FeedbackIcon color='inherit' fontSize='small'/><h4>Customer Feedback</h4></button>
     <button className='leftbarbtn' onClick={query}><ConnectWithoutContactIcon color='inherit' fontSize='medium' /><h4>Query</h4></button>
     <button className='leftbarbtn' onClick={logouthandler}><LogoutIcon color='inherit' fontSize='medium' /><h4>Logout</h4></button>
    </div>
    </>
    )
}

export default AdminSidebar