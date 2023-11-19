import React from 'react'
import '../Assests/CSS/Sidebar.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/userSlice';
function AdminSidebar() {
    const dispatch=useDispatch();
  const nav=useNavigate('');
  const logouthandler=()=>{
    dispatch(logout())
    nav("/")
  }
  return (
    <>
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
          <a href="dashboard" className="navigation-link">
            Dashboard
          </a>
        </li>
        <li className="navigation-item">
          <a href="registerlist" className="navigation-link">
            Users List
          </a>
        </li>
        <li className="navigation-item">
          <a href="reservelist" className="navigation-link">
            Reservation List
          </a>
        </li>
        <li className="navigation-item">
          <a href='contactlist' className="navigation-link">
            Contact List
          </a>
        </li>
        <li className="navigation-item">
          <a href='feedbacklist' className="navigation-link">
            Feedback List
          </a>
        </li>
   
        <li className="navigation-item">
          <p onClick={logouthandler} style={{cursor:"pointer"}}  className="navigation-link">
            Logout
          </p>
        </li>
      </ul>
      <div className="copyright">
      </div>
    </nav>
  </div>
    </>
    </>
  )
}

export default AdminSidebar