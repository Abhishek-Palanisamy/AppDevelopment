import React, { useEffect, useState } from 'react';
import '../Assests/CSS/Profile.css';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Profile() {
  const { bookingid } = useParams();
  const nav = useNavigate();
  const [count, setCount] = useState('');
  const [checkindate, setCheckingdate] = useState('');
  const [checkoutdate, setCheckoutdate] = useState('');
  const [bill, setBill] = useState('');
  const [invoiceno, setInvoiceno] = useState('');
  const [paymentstatus, setPaymentstatus] = useState('');
  const [username, setUsername] = useState('');
  const [roomtype, setRoomtype] = useState('');
  const [bill1, setBill1] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8999/auth/getbookingid/${bookingid}`).then((response) => {
          setCount(response.data.count);
          setCheckingdate(response.data.checkindate);
          setCheckoutdate(response.data.checkoutdate);
          setBill(response.data.bill);
          setInvoiceno(response.data.invoiceno);
          setPaymentstatus(response.data.paymentstatus);
          setUsername(response.data.username);
          setRoomtype(response.data.roomtype);
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [bookingid]);

  const submitupdate = async (e) => {
    e.preventDefault();

    // Calculate the difference in days
    const checkInDate = new Date(checkindate);
    const checkOutDate = new Date(checkoutdate);
    const diffff=Math.abs(checkInDate-checkOutDate)
    const differenceInDays = Math.ceil(diffff / (1000 * 60 * 60 * 24));

    // Calculate the new bill value
    const newBill = differenceInDays * bill * count;

    // Update the state
    setBill('0');

    const updatedetails = {
      count,
      checkindate,
      checkoutdate,
      bill: newBill, // Update bill1 with the new calculated value
      invoiceno,
      username,
      roomtype,
      paymentstatus,
    };

    const token = localStorage.getItem('token');

    try {
      const response1 = await axios.put(`http://localhost:8999/auth/putbooking/${bookingid}`, updatedetails).then((response1) => {
        nav('/bookings');
      });
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='bo'>
        <form class="form3" onSubmit={submitupdate}>
          <h2>User Profile</h2>
          {/* ... (rest of your form code) ... */}
          <div class="form3-group">
  
          <label for="email" className='pname'>Room Count:</label>
          <div class="relative">
              <input class="form3-control"  type='number'  value={count} onChange={(e)=>setCount(e.target.value)} placeholder="Type your name here..."/>
              <i class="fa fa-user"  style={{fontSize:"large"}}/>
          </div>
      </div>
      <div class="form3-group">
          <label for="email" className='pname'>CheckIn Date:</label>
          <div class="relative">
              <input class="form3-control" type="date" placeholder="Type your email address..." onChange={(e)=>setCheckingdate(e.target.value)} value={checkindate}/>
              <i class="fa fa-envelope"  style={{fontSize:"large"}}/>
          </div>
      </div>
      <div class="form3-group">
          <label for="email" className='pname'>CheckOut Date:</label>
          <div class="relative">
              <input class="form3-control" type="date"  value={checkoutdate}  onChange={(e)=>setCheckoutdate(e.target.value)} placeholder="Type your Mobile Number..."/>
              <i class="fa fa-phone"  style={{fontSize:"large"}}/>
          </div>
          
      </div>
  
          <div class="form3-group">
            <label for="email" className='pname'>Bill:</label>
            <div class="relative">
              <input class="form3-control" type='number' value={bill} placeholder="Type your name here..." onChange={(e) => setBill(e.target.value)} />
              <i class="fa fa-user" style={{ fontSize: "large" }} />
            </div>
          </div>
          
          <div class="tright">
            <button class="movebtn movebtnsu" type='submit'>Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
