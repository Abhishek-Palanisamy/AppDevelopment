import React, { useState } from 'react'
import '../Assets/CSS/Login.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { blue } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';
function Login() {
  const dispatch=useDispatch();
  const navigate=useNavigate(' ');
  const [username,setUsername]=useState('');
  const[password,setPassword]=useState('');

 
  const authenticate=(e)=>{
    
    e.preventDefault();
    if(username&&password){
      dispatch(login(username));
      navigate("/load");
    }
    if(username=="admin" && password=="admin007"){
      navigate("/dashboard")
    }

    
  }
  return (
    <>
    <div class="login-page1">
  <div class="login1">
    <center><h1>Login</h1></center>
    <form class="form-login1" type="submit" onSubmit={authenticate}>
      <label for="email">Username</label>
      <div class="input-email">
      <AccountCircleIcon sx={{color:blue[900]}} fontSize='medium' color='success'  /> 
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="   Enter your Username" required/>
      </div><br/>
     
      <label for="password">Password</label>
      <div class="input-password">
      <LockIcon sx={{color:blue[900]}} fontSize='medium' color='success'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} minLength={8} maxLength={16} placeholder="   Enter your Password" required/>
      </div>
      <button type="submit"> <LoginIcon sx={{color:'white'}} fontSize='medium' color='success' className='icon'/>  Login</button>
      <Link to="/register" style={{textDecoration:"none"}}><h5>New? Click Here..</h5></Link>
    </form> 
  </div>
  <div class="background">
  </div>
</div>
    </>
  )
}

export default Login