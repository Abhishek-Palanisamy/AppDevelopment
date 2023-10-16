import React, { useEffect, useState } from 'react'
import Navbar1 from './Navbar1'
import Sidebar1 from './Sidebar1'
import Footer from './Footer'
import '../Assets/CSS/BookingDetails.css'
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectUser } from '../Redux/userSlice'
import { useSelector } from 'react-redux'
function BookingDetails() {
    const [booking, setBooking] = useState(true);
    const user1=localStorage.getItem('username');
    const user = useSelector(selectUser);
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const username = user.user && user.user.username ? user.user.username:'Guest';
    useEffect(() => {
      // Fetch all data using Axios when the component mounts
      axios.get(`http://localhost:8081/auth/getbooking?username=${user1}`)
      .then((response) => {
        setDataList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      });
  }, []);
  const filteredData = dataList.filter(item => item.username === localStorage.getItem('username'));
  const handleDelete = (bookingid) => {
    axios.delete(`http://localhost:8081/auth/delbooking/${bookingid}`)
      .then(response => {
        console.log('Item deleted successfully.');
        window.location.reload();
        // You can update the state or perform any necessary actions here
      })
      .catch(error => {
        console.error('Error deleting item:', error);
        // Handle any errors here
      });
  }
  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='booking_container'>
    <h1>Booking Details</h1>
    <h3> 
    <div className='border'>
    {filteredData.map(item => (
      <div key={item.user1} className="bordered-item">
      <DeleteIcon style={{float:"right",cursor:"pointer"}} onClick={()=>handleDelete(item.bookingid)}/>
          <p>Booking Id : {item.bookingid}</p>
          <p>Username : {item.username}</p>
          <p>Invoice No : {item.invoiceno}</p>
          <p>CheckIn Date : {item.checkindate}</p>
          <p>CheckOut Date : {item.checkoutdate}</p>
          <p>Room Count : {item.count}</p>
          <p>Bill : {item.bill}</p>
      </div>
          ))}
      </div>
  
</h3>
    <div>
  </div>

    </div>
    </>
  )
}

export default BookingDetails