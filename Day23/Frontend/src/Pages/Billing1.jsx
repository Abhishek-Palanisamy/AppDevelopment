import React, { useState } from 'react'
import '../Assets/CSS/Billing.css'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
import { Button } from '@mui/material'
import '../Assets/CSS/Billing1.css'
import { Link, useNavigate } from 'react-router-dom'
function Billing1() {
    const [isRegistered, setIsRegistered] = useState(false);
  
    const success=()=>{
      setIsRegistered(true);
    };
      const [value, setValue] = React.useState();
  
      const handleChange = (event) => {
     
        setValue(event.target.value);
     
      };
  return (
    <div>
    <Navbar1/>
    <Sidebar1/>
    <div className='bill1'>
   <div className='bill-container1'>
   <div className='billform1'>
   <div className='billhead1'>
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
   <option value="card">Card</option>
   </select>
   </label>
   <br/>
   <br/>

   <label>CARD NUMBER : <input type="number" placeholder="Card Number" required/>
   </label>
   <br/>
   <br/>
   <label>AMOUNT : <input type="number" placeholder="Amount" required/>
   </label>
   <br/>
   <br/>   <br/>
   <br/>
   <Button className='list1'>
   <div className='button1'>
   PAYMENT
   </div>
   {isRegistered && (
    <div className="success-popup">
      <div className="success-popup-content">
        <h3>Payment Success</h3>
        <button className='btn1'>Done</button>
      </div>
    </div>
    
  )}
  </Button>
   <br/>
   <div className='button2'>
   CANCEL
   </div>
   
  
   </div>
   </div>
   </div>

 
    <Footer/>
    
    </div>
  )
}

export default Billing1