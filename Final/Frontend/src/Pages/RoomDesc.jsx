import React, {  useState } from 'react'
import '../Assests/CSS/RoomDesc.css'
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import 'react-datepicker/dist/react-datepicker.css'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
import axios from 'axios';


function RoomDesc() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  const [isRegistered, setIsRegistered] = useState(false);
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [difference, setDifference] = useState('');
  const [count,setCount]=useState('');
  const [bill, setBill] = useState(0);
  const [paid, setPaid] = useState(null);
  const [roomtype, setRoomtype] = useState(null);
  const [invoiceno, setInvoiceNumber] = useState('');


  useEffect(() => {
    if(date1&&date2&&count){
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d1 - d2);
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDifference(diffDays);
    setBill(diffDays * 984 * count);
    setPaid("Paid");
    setRoomtype("Single Room");
  }
  
}, [date1,date2, count]);
const generateInvoiceNumber = () => {
  const min = 10000; // Minimum 5-digit invoice number
  const max = 99999; // Maximum 5-digit invoice number
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};
const checkout=async()=>{
  
  const invoice = generateInvoiceNumber(); // Generating the invoice number
  setInvoiceNumber(invoice.toString());
  const data = {
    checkindate: date1,
    checkoutdate: date2,
    count: count,
    bill: bill,
    username: username,
    paymentstatus: paid,
    invoiceno: invoice,
    roomtype:roomtype,
  };
  try{
    const response=await axios.post("http://localhost:8999/auth/postbooking",data)
    console.log(response.data);
    setIsRegistered(true);
      }
      catch (error) {
        console.error("Error during checkout: ", error);
      }
}
  const imgs=[
    {id:0,value:"https://images.oyoroomscdn.com/uploads/hotel_image/220478/large/pshgshqumgre.jpg"},
    {id:1,value:"https://images.oyoroomscdn.com/uploads/hotel_image/220478/large/lefwxhxaefwf.jpg"},
    {id:2,value:"https://images.oyoroomscdn.com/uploads/hotel_image/220478/large/xvywfleceycf.jpg"},
    {id:3,value:"https://images.oyoroomscdn.com/uploads/hotel_image/220478/large/ylllnwihylqh.jpg"},
    {id:4,value:"https://images.oyoroomscdn.com/uploads/hotel_image/220478/large/xluiuogcnyvy.jpg"},
    {id:5,value:"https://images.oyoroomscdn.com/uploads/hotel_image/220478/large/vlqtqflqqjrv.jpg"},
];
const [slide,setSlide]=useState(imgs[0])
const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSlide(slider);
}

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className='containerrd'>
    <div className='desimgs'>

    <div id='main'>
    <img src={slide.value} width="700" height="400" /></div>
    <div className='flex_row'> 
    {
    imgs.map((data,i)=>
    <div className='thumbnail' key={i}>
    <img className={slide.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="40" width="60"/>
    </div>
    )
    }
    </div>



    </div>
    <div className='descontent1'>
    <div className='descontent'>
    <p>Get upto 15% Lower Prices</p>
    <div className='linebill'>
    </div>

    <br/>
    <b>₹984</b> <span>₹2817</span>
    <h6>Inclusive of all taxes</h6>
    <br/>

   <label>CheckIn Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="date" className='count1' value={date1} onChange={(e)=>setDate1(e.target.value)}/>
   <br/><br/>
    <label>CheckOut Date</label>&nbsp;&nbsp;&nbsp;<input type="date" className='count1' value={date2} onChange={(e)=>setDate2(e.target.value)}/>
    <br/><br/>
    <label>Room Count</label> <input type="number" className='count' value={count} onChange={(e)=>setCount(e.target.value)}/>
    <br/><br/>
    <br/>
    <h3>Total price: {bill}</h3>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='booknow' onClick={checkout}>Book Now</button>
    {isRegistered && (
      <div className="success-popup">
        <div className="success-popup-content">
          <h3>Booking Successfull</h3><br/><br/>
        <Link to='/'> <button className='btn12' style={{marginLeft:"37%"}}>Done</button></Link>
        </div>
      </div>
    )}
    </div>
    
    </div>
    <br/><br/>
    <div className='policy'>
    <h3>Hotel Policy</h3>
    
<li>As a complimentary benefit, your stay is now insured by Acko.</li>
<li> Guests can check in using any local or outstation ID proof.</li>
<li>Check-in allowed for guests aged 21 years and above only.</li>
<li>Tariff - subject to change without prior notice.</li>
<li> Only Indian Nationals allowed</li>
<li>We do not allow Pets.</li>
<li>Couples are Welcome.</li>

    </div>
    </div>

    <div className='containercc'>
    <br/>
    <h2>OYO Flagship 76687 Ramoji Kothapet</h2>
    <br/>
    <h4>611, Aruljothi Complex, Sathy Rd, C K Colony, B K R Nagar, New Siddhapudur,<br/> Coimbatore</h4>
    <h3>Amenities</h3><br/>
    <p>
    <AcUnitIcon fontSize='large'/>
    &nbsp;AC &nbsp;&nbsp;&nbsp;&nbsp;
    <TvIcon fontSize='large'/>&nbsp; Tv&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <WifiIcon fontSize='large'/>&nbsp; Free Wifi<br/>
    <br/>
    </p>
    <div className='hotelpolicy'>
    
    <div className='timetable'>
    <div className='checkin'>
    <div className='checkin1'>
    Checkin Time
    </div>
    
    <div className='checkin1'>
    Checkout Time
    </div>
    
    </div>
    <div className='checkout'>
    <div className='checkout1'>
    12.00 am
    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className='checkout1'>
    11.00 pm
    </div>
    </div>
    </div>
    </div>

    </div>
    <Footer/>
    </>
  )
}

export default RoomDesc