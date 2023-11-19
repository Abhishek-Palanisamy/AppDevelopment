

import React,{useState} from 'react'
import '../Assests/CSS/Home.css'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/userSlice'
import abtus1 from '../Assests/Images/abtus1.avif'
import abtus2 from '../Assests/Images/abtus2.avif'
import abtus3 from '../Assests/Images/abtus3.avif'
import singleroomcover from '../Assests/Images/singleroomcover.avif'
import doubleroomcover from '../Assests/Images/doubleroomcover.avif'
import luxroomcover from '../Assests/Images/luxroomcover.jpg'
import viproomcover from '../Assests/Images/viproomcover.jpg'
export default function Home() {
  const nav=useNavigate('');
  const gotoroomdesc=()=>{
    if(!isLoggedIn)
    {
      alert("Please Login to Proceed..")
    }
    else{
    nav("/roomdesc")
    }
  }
  const gotoroomdesc2=()=>{
    if(!isLoggedIn)
    {
      alert("Please Login to Proceed..")
    }
    else{
    nav("/roomdesc2")
    }
  }
  const gotoroomdesclux=()=>{
    if(!isLoggedIn)
    {
      alert("Please Login to Proceed..")
    }
    else{
    nav("/roomdesclux")
    }
  }
  const gotoroomdescvip=()=>{
    if(!isLoggedIn)
    {
      alert("Please Login to Proceed..")
    }
    else{
    nav("/roomdescvip")
    }
  }
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  const isLoggedIn = user.user && user.user.username;
  return (
    <div className='homebody'>
    <Navbar/>
<Sidebar/>

  <header className="header">
    <div className="brand">
  
      <h3 className="hotel-heading">Grand Hotel</h3>
    </div>
    <div className="banner">
      <h1 className="banner-heading">Welcome to Hotel Tulip</h1>
      <p className="banner-paragraph">Make your life luxurious</p>
    </div>
  </header>
  {/*end of header */}
  {/* About Us*/}
  <section className="about-us">
    <div className="about-us-content">
      <h1 className="about-us-heading">About Us</h1>
      <div className="underline">
        <div className="big-underline" />
        <div className="small-underline" />
      </div>
      <h3 className="sub-heading">Hotel Tulip</h3>
      <p className="about-us-paragraph">
      At Hotel Tulip Group we strive to be the first choice in the mind of guests, 
      owners and talent. In our journey to achieve this, we practice strong beliefs and actions that
       respect the diversity of people, the community, ethics and the planet.
      </p>
      <div>
      <p></p></div>
    </div>
    <figcaption className="about-us-images">
      <img
        src={abtus1}
        className="image image-1"
      />
      <img
        src={abtus2}
        className="image image-2"
      />
   
      <img
        src={abtus3}
        className="image image-4"
      />
    </figcaption>
  </section>
  {/* end of About Us */}
  {/*Rooms*/}
  <section className="rooms">
    <div className="common-header">
      <h1 className="common-heading">Rooms in Hotel Tulip</h1>
      <div className="underline">
        <div className="small-underline" />
        <div className="big-underline" />
      </div>
    </div>
    <div className="rooms-cards-wrapper">
      <div className="room-card">
        <img
          src={singleroomcover}
          className="room-img"
        />
        <div className="room-card-content">
          <h4 className="room-card-heading">Single Room</h4>
          <p className="room-card-paragraph">Best for Solo Person</p>
          <p className="room-price">₹984.00</p>
          <button className="room-card-btn" onClick={gotoroomdesc}>
            View Details
          </button>
        </div>
      </div>
      <div className="room-card">
        <img
          src={doubleroomcover}
          className="room-img"
        />
        <div className="room-card-content">
          <h4 className="room-card-heading">Double Room</h4>
          <p className="room-card-paragraph">Family Friendly</p>
          <p className="room-price">₹1995.00</p>
          <button className="room-card-btn" onClick={gotoroomdesc2}>
          View Details
          </button>
        </div>
      </div>
      <div className="room-card">
        <img
          src={luxroomcover}
          className="room-img"
        />
        <div className="room-card-content">
          <h4 className="room-card-heading">Lux</h4>
          <p className="room-card-paragraph">Enjoy the Luxuories Life</p>
          <p className="room-price">₹3014.00</p>
          <button className="room-card-btn" onClick={gotoroomdesclux}>
          View Details
          </button>
        </div>
      </div>
      <div className="room-card">
        <img
          src={viproomcover}
          className="room-img"
        />
        <div className="room-card-content">
          <h4 className="room-card-heading">VIP</h4>
          <p className="room-card-paragraph">World Class Rooms</p>
          <p className="room-price">₹5999.00</p>
          <button className="room-card-btn" onClick={gotoroomdescvip}>
          View Details
          </button>
        </div>
      </div>
    </div>
  
  
  </section>

  {/* footer */}
 
  {/* end of footer */}

<Footer/>
    </div>
  )
}
