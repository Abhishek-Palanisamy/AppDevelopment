import React, { useEffect, useState } from 'react'
import '../Assests/CSS/ReservedList.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import axios from 'axios'
import AdminSidebar from '../Components/AdminSidebar'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/userSlice'
import { useNavigate } from 'react-router-dom'
function ReservedList() {
  const [data, setData] = useState([]);
  const user = useSelector(selectUser);
  const username =user.user && user.user.username ? user.user.username : "Guest";

  const isLoggedIn = user.user && user.user.username;
  const nav = useNavigate();
  useEffect(() => {
    if (!isLoggedIn || user.user.username !== "admin") {
      // If the user is not authenticated or is not "admin," redirect them to the login page
       // You should update this to the correct login page URL
      setTimeout(() => {
        alert("You are not authorized. Please log in as an admin.");
      }, 100);
      nav("/login");
    }
  }, [isLoggedIn, user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8999/auth/getbooking', {
        });
        
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
  <Navbar/>
  <AdminSidebar/>
    <div className='containerrl'>
    <h2 style={{marginLeft:"45%"}}>Booking List</h2>
    <table className='content-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Invoice No</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Room Count</th>
          <th>Room Type</th>
          <th>Bill</th>
         
          </tr>
      </thead>
      <tbody>
      {data.map((item) => (
        <tr key={item.bookingid} className='active-row'>
          <td>{item.bookingid}</td>
          <td>{item.username}</td>
          <td>{item.invoiceno}</td>
          <td>{item.checkindate}</td>
          <td>{item.checkoutdate}</td>
          <td>{item.count}</td>
          <td>{item.roomtype}</td>
          <td>{item.bill}</td>
          </tr>
          ))}
      </tbody>
    </table>
    </div>
    <Footer/>
    </>
  )
}

export default ReservedList
