import React from 'react'
import Layout from '../Components/Layout'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import Footer from '../Components/Footer'
import king from '../Assets/Images/king.webp'
import deluxe from '../Assets/Images/deluxe.webp'
import standard from '../Assets/Images/standard.webp'
import presidentalsuit from '../Assets/Images/presidentalsuite.webp'
import '../Assets/CSS/HomePage.css'

function HomePage() {
  return (
    <>
  <Navbar1/>
  <Sidebar1/>
  <div className='container-homepage'>
  <div className='roomtypes'>
  <div className='rooms'>
  <img src={deluxe}  width={300} height={200}/>
  <div className='des'>
  OYO Flagship 76687 Ramoji Kothapet 
  <h6>Parking, Reception, Free Wifi</h6><br/>
  Max Count : 3<br/><br/>
  Phone Number : 7894561230<br/><br/>
  Type : Non - Deluxe<br/>
  <p>View Details</p>
  </div>
  </div>
  <div className='rooms'>
  <img src={standard}  width={300} height={200}/>
  <div className='des'>
  OYO Flagship 16382 Metro International 
  <h6>Parking, Reception, Free Wifi</h6><br/>
  Max Count : 2<br/><br/>
  Phone Number : 4561279830<br/><br/>
  Type : Deluxe<br/>
  <p>View Details</p>
  </div>
  </div>
  <div className='rooms'>
  <img src={presidentalsuit}  width={300} height={200}/>
  <div className='des'>
  OYO 8021 Collection O Sri Navya Grand
  <h6>Parking, Reception, Free Wifi</h6><br/>
  Max Count : 5<br/><br/>
  Phone Number : 987561230<br/><br/>
  Type : Super Deluxe<br/>
  <p>View Details</p>
  </div>
  </div>
  </div>
  </div>
  <Footer/>
    </>
  )
}

export default HomePage