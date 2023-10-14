import React, { useState } from 'react'
import Navbar1 from './Navbar1'
import Sidebar1 from './Sidebar1'
import Footer from './Footer'
import '../Assets/CSS/RoomDes.css'
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import 'react-datepicker/dist/react-datepicker.css'
import { useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function RoomDes() {
  const nav=useNavigate("");
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
  const checkout=()=>{
    nav("/bill")
  }
  const imgs=[
    {id:0,value:"https://images.oyoroomscdn.com/uploads/hotel_image/215184/large/xpdfvpuldsls.jpg"},
    {id:1,value:"https://images.oyoroomscdn.com/uploads/hotel_image/215184/large/pinqaglkegtt.jpg"},
    {id:2,value:"https://images.oyoroomscdn.com/uploads/hotel_image/215184/large/umoisckdqksu.jpg"},
    {id:3,value:"https://images.oyoroomscdn.com/uploads/hotel_image/215184/large/teyptvqqgnti.jpg"},
    {id:4,value:"https://images.oyoroomscdn.com/uploads/hotel_image/215184/large/xvfflmtjinkq.jpg"},
    {id:5,value:"https://images.oyoroomscdn.com/uploads/hotel_image/215184/large/dihewdtuiotu.jpg"},
    {id:6,value:"https://images.oyoroomscdn.com/uploads/hotel_image/215184/large/unqlnpldwsvl.jpg"}
];
const [slide,setSlide]=useState(imgs[0])
const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSlide(slider);
}

  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='containerrd'>
    <div className='desimgs'>

    <div id='main'>
    <img src={slide.value} width="600" height="400" /></div>
    <div className='flex_row'> 
    {
    imgs.map((data,i)=>
    <div className='thumbnail' key={i}>
    <img className={slide.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="50" width="70"/>
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
    <b>₹984</b> &nbsp; &nbsp;<span>₹2817</span>
    <h6>Inclusive of all taxes</h6>
    <br/>
   <label>CheckIn Date</label>&nbsp;&nbsp;&nbsp; <input type="date" value={date1} onChange={e => setDate1(e.target.value)} />
   <br/><br/>
    <label>CheckOut Date</label>&nbsp;&nbsp;<input type="date" value={date2} onChange={e => setDate2(e.target.value)} required />
    <p className="calculate"  onClick={calculateDifference}><CheckCircleIcon/></p>
    <br/><br/><br/><br/><br/><br/>
    <h3>Total price: {difference*984}</h3>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='booknow' onClick={checkout}>Book Now</button>
    </div>
    
    </div>
    <div className='policy'>
    
    <li>Check-in allowed for guests aged 21 years and above only  </li>
<li> Guests can check in using any local or outstation ID proof (PAN card not accepted).
</li>
<li> Only Indian Nationals allowed</li>
<li>As a complimentary benefit, your stay is now insured by Acko.
</li>
<li>Couples are Welcome</li>
<li>We do not allow Pets.</li>
<li>Tariff - subject to change without prior notice.
</li>

    </div>
    </div>

    <div className='containercc'>
    <h2>OYO Flagship 76687 Ramoji Kothapet</h2><br/>
    <h4>611, Aruljothi Complex, Sathy Rd, C K Colony, B K R Nagar, New Siddhapudur,<br/> Coimbatore</h4><br/>
    <h3>Amenities</h3><br/>
    <AcUnitIcon fontSize='small'/>
    &nbsp;AC &nbsp;&nbsp;&nbsp;&nbsp;
    <TvIcon fontSize='small'/>&nbsp; Tv&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <WifiIcon fontSize='small'/>&nbsp; Free Wifi<br/>
    <br/>
    <div className='hotelpolicy'>
    <h3>Hotel Policy</h3>
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

    </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
    </>
  )
}

export default RoomDes