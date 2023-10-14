import React from 'react'
import '../Assets/CSS/Admin.css';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CallIcon from '@mui/icons-material/Call';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
  return (
    <>
    <div className='side'>

     <button className='leftbarbtn' onClick={dashboard}><DashboardIcon color='inherit' fontSize='small'/><h4>Dashboard</h4></button>
     <button className='leftbarbtn' onClick={reservedlist}><ChecklistIcon color='inherit' fontSize='small'/><h4>Reserved List</h4></button>
     <button className='leftbarbtn' onClick={logouthandler}><LogoutIcon color='inherit' fontSize='medium' /><h4>Logout</h4></button>
    </div>
    </>
    )
}

export default AdminSidebar