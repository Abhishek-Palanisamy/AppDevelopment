import React from 'react'
import '../Assets/CSS/Dashboard.css'
import Layout from '../Components/Layout'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { Label } from '@mui/icons-material'

function Dashboard() {
  return (
    <>
    <Navbar1/>
    <Sidebar1/>
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
      <LineChart
      xAxis={[{ data: [1, 2, 3,4, 5,6,7, 8,9, 10,11,12] }]}
      series={[
        {
          data: [23, 15, 30,5, 12,10,40, 60,12, 3,19,27],
        },
      ]}
      width={500}
      height={300}
    />
  </div>
    </div>
  
    
<Footer/>

    </>
  )
}

export default Dashboard