import React from 'react'
import '../Assests/CSS/ReservedList.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import AdminSidebar from '../Components/AdminSidebar'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/userSlice'
import { useNavigate } from 'react-router-dom'

function ContactList() {
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
      }, 1000);
      nav("/login");
    }
  }, [isLoggedIn, user]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8999/auth/getContact', {
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
    <h2>CallBack List</h2>
    <table className='content-table'>
      <thead className='thh'>
        <tr>
          <th>Name</th>
          <th>Mobile No</th>
          <th>Email Id</th>
          <th>Subject</th>
          <th>Query</th>
         
          </tr>
      </thead>
      <tbody>
      {data.map((item) => (
        <tr key={item.id} className='active-row'>
        <td>{item.firstname}</td>
          <td>{item.mobile}</td>
          <td>{item.emailid}</td>
          <td>{item.subject}</td>
          <td>{item.query}</td>

        </tr>
      ))}
      </tbody>
    </table>
    </div>
    <Footer/>
    </>
  )
}

export default ContactList
