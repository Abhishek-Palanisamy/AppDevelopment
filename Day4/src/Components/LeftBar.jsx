import React from 'react'
import "../Assests/CSS/LeftBar.css";
import { blue } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import KitchenIcon from '@mui/icons-material/Kitchen';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
function LeftBar() {
  return (
    <>
    <div className='leftbar'>
    <div className='leftbar-container'>
   <button className='leftbarbtn'> <AccountCircleIcon color='inherit' fontSize='large' />
   Profile</button>
    <button className='leftbarbtn'><CallIcon color='inherit'  fontSize='large' />Contact</button>
    <button className='leftbarbtn'><EmojiTransportationIcon color='inherit' fontSize='large' />Travel</button>
    <button className='leftbarbtn'><KitchenIcon color='inherit' fontSize='large' />Food</button>
    </div>
    </div>
    </>
  )
}

export default LeftBar