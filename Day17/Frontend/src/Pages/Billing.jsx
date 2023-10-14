import React, { useState } from 'react'
import '../Assets/CSS/Billing.css'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

function Billing() {
  const nav=useNavigate('')
  const [isRegistered, setIsRegistered] = useState(false);

  const success=()=>{
    setIsRegistered(true);
  };
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
   
      setValue(event.target.value);
   
    };
  const roomdes=()=>{
    nav("/roomdes")
  }
  const card=()=>{
    nav("/bill1")
  }
  
  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='bill'>
   <div className='bill-container'>
   <div className='billform'>
   <div className='billhead'>
   <br/>
   <h1>BILLING</h1>
   </div>
  
   <br/>
   <label>
   <br/>
   INVOICE NO : <input type="number" placeholder="Invoice No" required/>
   </label>
   <br/>
   <br/>
   <label>
   PAYMENT TYPE : 
   <select value={value} onChange={handleChange}>
   <option value="cash">Cash</option>
   <option value="card"  onClick={card}>Card</option>
   </select>
   </label>
   <br/>
   <br/>
   <label>AMOUNT : <input type="number" placeholder="Amount" required/>
   </label>
   <br/>
   <br/>
   <br/>
   <Button className='list1' onClick={success}>
   <div className='button1'>
   PAYMENT
   </div>
   {isRegistered && (
    <div className="success-popup">
      <div className="success-popup-content">
        <h3>Payment Success</h3>
        <Link to='/home'><button className='btn1'>Done</button></Link>
      </div>
    </div>
    
  )}
  <br/>
  <div className='button2' onClick={roomdes}>
  CANCEL
  </div>
  </Button>
   
  
   </div>
   </div>
   </div>

 
    <Footer/>
    </>
  )
}
    

export default Billing;