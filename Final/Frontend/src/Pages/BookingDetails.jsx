import React, { useEffect, useState } from 'react';
import data from './data.json';
import DeleteIcon from '@mui/icons-material/Delete';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../Assests/CSS/BookingDetails.css';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import { Link } from 'react-router-dom';

function BookingDetails() {
  const user1 = localStorage.getItem('username');
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // Fetch all data using Axios when the component mounts
    axios
      .get(`http://localhost:8999/auth/getbooking?username=${user1}`)
      .then((response) => {
        setDataList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      });
  }, []);

  const filteredData = dataList.filter((item) => item.username === localStorage.getItem('username'));

  const handleDelete = (bookingid) => {
    axios.delete(`http://localhost:8999/auth/delbooking/${bookingid}`)
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

  useEffect(() => {
    const closeSidebar = () => {
      // Close the sidebar here
    };

    // Add an event listener to handle clicks outside the sidebar
    document.addEventListener('click', closeSidebar);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="space1">
        <div class="odetails-1">
          <div className="space">
          <p>
          <b>Username</b>
            </p>
            <p>{username}</p>
          </div>
          </div>
          </div>
          
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.user1}>
             <Link to={`/profile/${item.bookingid}`}> <i class="fa fa-undo" style={{fontSize:"large",cursor:"pointer",marginLeft:"78%"}}/></Link>
              <i class="fa fa-trash" style={{fontSize:"large",cursor:"pointer",marginLeft:"78%"}}  onClick={()=>handleDelete(item.bookingid)}/>
              <div class="container-bookingdetails">
              <div class="card-container">
              <div className="bk">
              <h4 className="bkid">Booking Id : {item.bookingid}</h4>
              <h4 className="bkinvoice">Invoice No : {item.invoiceno}</h4>
            </div>
                <div class="card">
                <div class="parent">
                    <div class="content">
                      <div class="details-2">
                      <p>No of Rooms : {item.count}</p>
                      <b>Bill : {item.bill}</b>
                      </div>
                      </div>
                    <div class="status">
                    <div class="sec1">
                    <p>Payment Status</p>
                    <h2>{item.paymentstatus}</h2>
                    </div>
                    <div class="sec1">
                    <p>Room Type</p>
                    <h2>{item.roomtype}</h2>
                    </div>
                      <div class="sec2">
                      <p>CheckIn Date</p>
                        <h3>{item.checkindate}</h3>
                        <p>CheckOut Date</p>
                        <h3>{item.checkoutdate}</h3>
                        </div>
                        </div>
                        </div>
                        </div>
                        <hr />
                        </div>
                        </div>
          </div>
        ))
      ) : (
        <div className="custom-content">
          <p>No bookings found!</p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default BookingDetails;
