import React, { useEffect, useState } from 'react'
import '../Assets/CSS/ReservedList.css'
import AdminNavbar from '../Components/AdminNavbar';
import AdminSidebar from '../Components/AdminSidebar';
import axios from 'axios';
function FeedbackList() {
    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/auth/getfeedback', {
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
    <h2>Feedback List</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Amenities</th>
          <th>Cleanliness</th>
          <th>Stay</th>
          <th>Comments</th>
     
         
          </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
          <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.amenities}</td>
            <td>{item.cleanliness}</td>
            <td>{item.stay}</td>
            <td>{item.comments}</td>
  
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default FeedbackList