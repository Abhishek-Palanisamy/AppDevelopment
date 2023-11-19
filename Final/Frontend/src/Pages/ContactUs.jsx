import React, { useState } from 'react'
import '../Assests/CSS/ContactUs.css'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function ContactUs() {
    const nav=useNavigate("");
    const[firstname,setFirstname]=useState(" ");
    const[subject,setSubject]=useState(" ");
    const[emailid,setEmailid]=useState(" ");
    const[mobile,setMobile]=useState(" ");
  const[query,setQuery]=useState(" ");
    const submitquery=(e)=>{
        e.preventDefault();
        const contact={firstname,mobile,query,subject,emailid}
        console.log(contact);
        axios.post("http://localhost:8999/auth/postContact",contact)
      nav("/")
      }
  return (
    <>
  <Navbar/>
<section className="contact-info-area">
  <div className="container">
              <div className="contact-form">
                          <div className="sec-title-style1 float-left">
                              <div className="title">Send Your Message</div>
                              <div className="text"><div className="decor-left"><span></span></div><p>Contact Form</p></div>
                          </div>
                      <form id="contact-form" name="contact_form" className="default-form" onSubmit={submitquery}>
                                          <div className="input-box">   
                                              <input type="text" name="form_name"  placeholder="Name"  onChange={(e)=>setFirstname(e.target.value)}/>
                                          </div> 
                                           <div className="input-box"> 
                                              <input type="text" name="form_phone"  placeholder="Phone" onChange={(e)=>setMobile(e.target.value)}/>
                                          </div>
                                          <div className="input-box"> 
                                              <input type="email" name="form_email"  placeholder="Email" onChange={(e)=>setEmailid(e.target.value)}/>
                                          </div>
                                          <div className="input-box"> 
                                              <input type="text" name="form_subject"  placeholder="Subject" onChange={(e)=>setSubject(e.target.value)}/>
                                          </div>     
                                  <div className="input-box">    
                                      <textarea name="form_message" placeholder="Your Message..." onChange={(e)=>setQuery(e.target.value)}></textarea>
                                  </div>
                                  <div className="button-box">
                                      <button type="submit">Send Message</button>    
                                  </div>         
                      </form>
                  </div>
              </div>
</section>
<Footer/>
    </>
  )
}

export default ContactUs