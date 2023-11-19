import React from 'react'
import '../Assests/CSS/AboutUs.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
function AboutUs() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div class="containerabt">
<div className='imgabt'>
<img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Cloud_banner.jpg"/>  
</div>

<h1> About Us </h1>

<p className='abt'> Hotel Management has been the hospitality industry’s magazine of record for
more than 140 years. Today, it covers hotel investment, development, 
operations, design, technology, brand strategies and the sharing economy for
the new generation of hotel owner, developer, operator, broker and financier.
Our editorial staff provides the very latest news and insight for the hospitality 
community and boasts a masthead brimming with sought-after thought leaders 
in the industry </p>
<br/>
<p className='abthead'>An International Presence</p>
<p className='abt'>We are present in over 95 countries with ten distinctive brands.
Together with our partners, we continue to develop new hotels and 
generate synergies to go much further.Our team is committed to extra thoughtful
care and is passionate about delivering an amazing hotel experience.</p>
<p className='abthead'>People at the heart of our business</p>
<p className='abt'>Our team is committed to extra thoughtful care and is passionate about 
delivering an amazing hotel experience. While each of our team members at Hotel Tulip Group plays 
a unique role, they all serve as brand ambassadors working to deliver memorable moments and turn guests into 
passionate brand advocates.</p>
<p className='abthead'>Our way of being</p>
<p className='abt'>At Hotel Tulip Group we strive to be the first choice in the mind of guests, owners 
and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of 
people, the community, ethics and the planet.</p>
<p className='abthead'>Patnerships</p>
<p className='abt'>Hotel Tulip is proud to collaborate with creative and curious-minded 
partners that further celebrate the brand, its European heritage, playful sophistication and devotion to 
savouring the good life. One of these partners is illy, who has partnered with us to bring true European 
café culture to life at our hotels.</p>
<br/>
<br/>
</div>

  <Footer/>
    </>
  )
}

export default AboutUs