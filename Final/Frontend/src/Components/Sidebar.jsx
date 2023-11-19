import React, { useState } from 'react'
import '../Assests/CSS/Sidebar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Redux/userSlice';
function Sidebar() {
  
  const location = useLocation();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const user = useSelector(selectUser);

  const dispatch=useDispatch();
  const nav=useNavigate('');
  const logouthandler=()=>{
    dispatch(logout())
    alert("Logout Successfully!")
    nav("/login")
  }
  return (
    <>
    <div className="navbar">
    <input type="checkbox" className="checkbox" id="click" hidden=""  />
    {/* sidebar */}
    <div className="sidebar">
     
    
   
    </div>
    {/* end of sidebar */}
    {/*navigation*/}
    <nav className="navigation">
      <div className="navigation-header">
        <h1 className="navigation-heading">Grand Hotel</h1>
      </div>
      <ul className="navigation-list">
        <li className="navigation-item">
          <a href="/" className="navigation-link">
            Home
          </a>
        </li>
        <li className="navigation-item">
          <a href="about" className="navigation-link">
            About us
          </a>
        </li>
        <li className="navigation-item">
          <a href="contact" className="navigation-link">
            Contact Us
          </a>
        </li>
        <li className="navigation-item">
          <a href='bookings' className="navigation-link">
            Bookings
          </a>
        </li>
   
        <li className="navigation-item">
        {user.user && user.user.username ?(
           <p onClick={logouthandler} style={{cursor:"pointer"}}  className="navigation-link">
            Logout
          </p>
        ):(<Link
          to="/login"
          className={`nav-links ${
            location.pathname === "/login" ? "active" : ""
          }`}
          onClick={handleClick}
        >
        <p className='navigation-link'>Login</p>
        </Link>
        )}
        </li>
      </ul>
      <div className="copyright">
      </div>
    </nav>
  </div>
    </>
  )
}

export default Sidebar