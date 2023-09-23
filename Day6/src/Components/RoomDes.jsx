import React, { useState } from 'react'
import '../Assets/CSS/RoomDes.css'
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import Navbar1 from './Navbar1'
import Sidebar1 from './Sidebar1'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

import Footer from './Footer'
import img1 from '../Assets/Images/roomdes1.avif'
import AcUnitIcon from '@mui/icons-material/AcUnit';




function RoomDes() {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [difference, setDifference] = useState('');

  const calculateDifference = () => {
      const d1 = new Date(date1);
      const d2 = new Date(date2);
      const diff = Math.abs(d1 - d2);
      const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDifference(diffDays);
  };

    
  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='containerdes1'>
    <div className='containerdes'>
    <div className='desimgs'>
    <img src={img1} height={400}/>

    </div>

    <div className='descontent'>
    <h2>OYO Flagship 76687 Ramoji Kothapet</h2><br/><br/>
    <p>No 2-A, 2 Main Road, Sri Krishna Nagar Keeranatham Road, Saravanampatti, <br/>Coimbatore
    </p>
    <div className='card'>
    <div className='header'>
    <h1>1</h1>
    </div>
    <div className='containerh1'>
    <p>Ratings</p>
    </div>
    </div>
    <br/><br/>  <br/><br/>  <br/><br/><br/>  <br/><br/><br/>  <br/>

    <h2>Amenities</h2><br/>
    <div className='amenities'>
    <AcUnitIcon fontSize='small'/>
    &nbsp;AC &nbsp;&nbsp;&nbsp;&nbsp;
    <TvIcon fontSize='small'/>&nbsp; Tv&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <WifiIcon fontSize='small'/>&nbsp; Free Wifi<br/>
    <br/>
    <br/>
    </div>
    <div className='timetable'>
    <div className='checkin'>
    <div className='checkin1'>
    Checkin Time
    </div>
    
    <div className='checkin1'>
    Checkout Time
    </div>
    
    </div>
    <br/>
    <div className='checkout'>
    <div className='checkout1'>
    12.00 am
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className='checkout1'>
    12.00 am
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='billing'>
    <h4>Get your Rooms upto 15% Lower Prices</h4>
    <div className='linebill'>
    </div>
    <br/>
    <b>₹984</b> &nbsp; &nbsp;<span>₹2817</span>
<br/>
<br/>
<div className='datefill'>
<div className='date'>
     &nbsp;CheckIn Date <input type='date' value={date1} onChange={(e)=>setDate1(e.target.value)}/>
 </div>
<div className='date'>
      CheckOut Date<input type='date' value={date2} onChange={(e)=>setDate2(e.target.value)}/>
 </div>
 <button onClick={calculateDifference}>Cal</button>
 </div>
 <br/>
 <h1>Total Price: {difference*984} </h1>
 <button>Checkout</button>

    </div>
    </div>
    <br/>

    <Footer/>
    </>
  )
}

export default RoomDes