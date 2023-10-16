import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../Components/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar';

function ContactList() {
    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/auth/getContact', {
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
    <h2>Contact List</h2>
    <table>
      <thead>
        <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Mobile No</th>
        <th>Query</th>
     
         
          </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
          <td>{item.id}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.mobile}</td>
            <td>{item.query}</td>
  
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default ContactList