import React, { useEffect, useState } from 'react'
import reservedlist from '../Components/reservedlist.json'
import axios from 'axios';
import '../Assets/CSS/ReservedList.css'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import AdminFooter from './AdminFooter'
function ReservedList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/auth/getbooking', {
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
    <h2>Reserved List</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Invoice No</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Room Count</th>
          <th>Bill</th>
         
          </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.bookingid}>
            <td>{item.bookingid}</td>
            <td>{item.username}</td>
            <td>{item.invoiceno}</td>
            <td>{item.checkindate}</td>
            <td>{item.checkoutdate}</td>
            <td>{item.count}</td>
            <td>{item.bill}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default ReservedList
