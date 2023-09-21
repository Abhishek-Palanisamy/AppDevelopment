import React from 'react'
import '../Assets/CSS/AboutsUs.css'
import Navbar1 from '../Components/Navbar1'
import Sidebar1 from '../Components/Sidebar1'
import logo from '../Assets/Images/AClogo.png'
import Footer from '../Components/Footer'
import abtbg from'../Assets/Images/abtusbg.jpg'
function AboutUs() {
  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className='containerbg'>
    <div className='containerabt'>
    <div className='abtus'>About Us</div>
    <br/>
    <div className='abt'>
    <h4>Hotel Management has been the hospitality industry’s magazine of record for <br/>
    more than 140 years. Today, it covers hotel investment, development, <br/>
    operations, design, technology, brand strategies and the sharing economy for<br/>
     the new generation of hotel owner, developer, operator, broker and financier. <br/>
     Our editorial staff provides the very latest news and insight for the hospitality <br/>
     community and boasts a masthead brimming with sought-after thought leaders <br/>
     in the industry</h4><div className='imgs'>
     <img src={abtbg} width={400} height={200} /></div>
     </div>
     </div>
     <div className='teamname'>Our Team</div>
     <div className='team'>
     <div>
     <img src={logo} width={80} />
     <br/>
     Hemaharshini K J<br/>IT<br/>3 Yr
     </div>
     <div>
     <img src={logo} width={80} />
     <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Akshaya D<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 Yr
     </div>
     <div>
     <img src={logo} width={80} />
     <br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abhishek P<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 Yr
     </div>
     </div>
     </div>
     <Footer/>
    </>
  )
}

export default AboutUs