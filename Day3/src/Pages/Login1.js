import React, { useState } from 'react'
import './Styles.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { blue } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
function Login1() {
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate("");
  const authenticate=(e)=>{
    e.preventDefault();
    if(name.length===0){
      alert("Enter Username")
    }
    else if(password.length===0)
    {
      alert("Enter Password")
    }
    else{
      navigate("/home")
    }

    
  }
  return (
    <>
    <div class="login-page1">
  <div class="login1">
    <center><h2>Login</h2></center>
    <form class="form-login1">
      <label for="email">Username</label>
      <div class="input-email">
        <EmailIcon sx={{color:blue[900]}} fontSize='medium' color='success'/> 
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="   Enter your Username" required/>
      </div><br/>
     
      <label for="password">Password</label>
      <div class="input-password">
      <LockIcon sx={{color:blue[900]}} fontSize='medium' color='success'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="   Enter your Password" required/>
      </div>

      <button type="submit" onClick={authenticate}> Login</button>
      <Link to="/register" style={{textDecoration:"none"}}><h4>New? Click Here..</h4></Link>
    </form> 
  </div>
  <div class="background">
  </div>
</div>
    </>
  )
}

export default Login1