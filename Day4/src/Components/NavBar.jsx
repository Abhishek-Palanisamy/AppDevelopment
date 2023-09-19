import React from 'react'
import '../Assests/CSS/NavBar.css';
import Logo from '../Assests/Images/Logo.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function NavBar() {
  return (
    <>
    <div className='navbar'>
   <div className='navbar-container'>
   <img src={Logo} alt='Logo' height={56} width={70}/>
   <AccountCircleIcon color="inherit"  fontSize='large'  className='icon'/>
   </div> 
    </div>
    </>
  )
}
export default NavBar