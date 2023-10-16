import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Assets/CSS/ReservedList.css'
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
function RegisteredList() {
    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/auth/getregister', {
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
    <AdminNavbar/>
    <AdminSidebar/>
    <div className='containers'>
    <h2>Registers List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email ID</th>
          <th>Mobile No</th>
     
         
          </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.user_reg_id}>
          <td>{item.username}</td>
            <td>{item.emailid}</td>
            <td>{item.mobileno}</td>
  
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default RegisteredList