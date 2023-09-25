import React from 'react'
import '../Assets/CSS/Dashboard.css'
import Layout from '../Components/Layout'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

import { LineChart } from '@mui/x-charts/LineChart';
import { Label } from '@mui/icons-material'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import AdminFooter from '../Components/AdminFooter'

function Dashboard() {


  const data = [
    { value: 30, label: 'Deluxe' },
    { value: 30, label: 'Standard' },
    { value: 25, label: 'King' },
    { value: 15, label: 'Vacation' },
  ];
  
  const size = {
    width: 400,
    height: 200,
  };
  return (
    <>
    <AdminNavbar/>
    <AdminSidebar/>
    <div className='dash'>
    <h1>Dashboard</h1>
    <div className='nor'>
    <div className='bor'>
    <h5>157<br/>
    <br/>
    No.of Rooms</h5>
    </div>
    <div className='bor'>
    <h5>34<br/>
    <br/>
    Vacant Rooms</h5>
    </div>
    <div className='bor'>
    <h5>50<br/>
    <br/>
    Today's Booking</h5>
    </div>
    <div className='bor'>
    <h5>140<br/>
    <br/>
    Bookings This Month</h5>
    </div>

    </div>
    <div className='bar'>
    <h3>Booking Stats</h3>
    <BarChart
    xAxis={[
      {
        id: 'barCategories',
        data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: [23, 15, 30,5,12,10,40,60,12,3,19,27],
      },
    ]}
    width={500}
    height={300}
  />
  <div className='piechart'>
  <PieChart
  series={[
    {
      arcLabel: (item) => ` ${item.value}`,
      arcLabelMinAngle: 45,
      data,
    },
  ]}
  sx={{
    [`& .${pieArcLabelClasses.root}`]: {
      fill: 'white',
      fontWeight: 'bold',
    },
  }}
  {...size}
/>
</div>
  </div>

  <div className='event'>
  <h3>Event Details </h3>
  <br/>
  <div className='event1'>
  <p><b>Event Name : </b>AK's Birthday<br/>
  <b>Event Date :</b> 12/09/23<br/>
  <b>Event Time :</b> 9.00 pm - 12.00 am</p>
  </div>
  <div className='event1'>
  <p><b>Event Name : </b>Conference<br/>
  <b>Event Date :</b> 30/10/23<br/>
  <b>Event Time :</b> 9.00 am - 10.00 am</p>
  </div>
  <div className='event1'>
  <p><b>Event Name : </b>Party<br/>
  <b>Event Date :</b> 30/11/23<br/>
  <b>Event Time :</b> 9.00 pm - 12.00 am</p>
  </div>

  </div>
    </div>
  
    
<AdminFooter/>

    </>
  )
}

export default Dashboard