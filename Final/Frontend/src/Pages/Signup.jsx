import React, { useState} from 'react'
import '../Assests/CSS/Signup.css'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { blue } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


            
function Signup() {
  const [isRegistered, setIsRegistered] = useState(false);

  const[username,setName]=useState("");
  const[mobileno,setMobileno]=useState("");
  const[emailid,setEmail]=useState("");
  const[password,setPassword] = useState("");
  const nav=useNavigate('');
  const authenticate=(e)=>{
    e.preventDefault();
    const logindetails={username,password,mobileno,emailid}
    console.log(logindetails);
        axios.post("http://localhost:8999/auth/register",logindetails)
        setIsRegistered(true);
  }

  return (
    <> 
    <div class="login-page2">
    <div className='backgrnd1'></div>
    <div class="login2">
      <center><h2 style={{fontSize:"25px"}}>Registeration</h2></center>
      <form class="form-login2" type="submit" onSubmit={authenticate}>

        <label for="name" style={{fontSize:'17px',fontWeight:'700'}}>User Name</label>
        <div class="input-email">
          <AccountCircleIcon sx={{color:blue[900]}} fontSize='large' className='icon1' color='success'  /> 
          <input type="text" placeholder="   Enter your Name" value={username} onChange={(e)=>setName(e.target.value)} required />
        </div><br/>

        <label style={{fontSize:'17px',fontWeight:'700'}}>Mobileno</label>
        <div class="input-email">
          <PhoneAndroidIcon sx={{color:blue[900]}} fontSize='large' className='icon1' color='success' /> 
          <input type="tel" pattern="[6789][0-9]{9}" minLength={10} maxLength={10} value={mobileno} onChange={(e)=>setMobileno(e.target.value)} placeholder="   Enter your Number" required/>
        </div><br/>

        <label for="email" style={{fontSize:'17px',fontWeight:'700'}}>E-mail</label>
        <div class="input-email">
          <EmailIcon sx={{color:blue[900]}} fontSize='large' className='icon1' color='success'/> 
          <input type="email" value={emailid} onChange={(e)=>setEmail(e.target.value)} placeholder="   Enter your E-mail" required/>
        </div><br/>
       
        <label for="password" style={{fontSize:'17px',fontWeight:'700'}}>Password</label>
        <div class="input-password">
        <LockIcon sx={{color:blue[900]}} fontSize='large' className='icon1' color='success'/>
          <input type="password" minLength={8} maxLength={16} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="   Enter your Password" required />
        </div>
        {isRegistered && (
          <div className="success-popup">
            <div className="success-popup-content">
              <h3>Registeration Successfull</h3><br/><br/>
            <Link to='/login'> <button className='btn12'>Done</button></Link>
            </div>
          </div>
        )}
        <button type="submit" > Register</button>
  

<Link to='/login'><h5>Already Have An Account?</h5></Link>
      </form> 
    </div>
  </div>
    </>
  )
}

export default Signup