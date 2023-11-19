import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { blue } from '@mui/material/colors';
import '../Assests/CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';
import axios from 'axios';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate('');
  const dispatch=useDispatch();
  const authenticate=async(e)=>{
    e.preventDefault();
    try {
      if (username && password) {
        const loginData = { username, password };
        dispatch(login(username));
  
        const response = await axios.post("http://localhost:8999/auth/authentication", loginData);
  
        if (response.status === 200) {
          const token = response.data.token;
          if (token) {
            localStorage.setItem('token', token); // Store the token in localStorage
            nav("/loading");
            if (username === "admin" && password === "admin007") {
              nav("/dashboard");
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
      alert("Enter Valid Credentials");
  }
  }

  
  return (
    <>
    <div className='backgrnd'> </div>
    <div class="login-page1">
    <div class="login1">
      <center><h2 style={{fontSize:"27px"}}>Login</h2></center>
      <form class="form-login1" type="submit" onSubmit={authenticate}>
        <label for="email">Username</label>
        <div class="input-email">
        <AccountCircleIcon sx={{color:blue[900]}} fontSize='large' color='success'  /> 
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="   Enter your Username" required/>
        </div><br/>
       
        <label for="password">Password</label>
        <div class="input-password">
        <LockIcon sx={{color:blue[900]}} fontSize='large' color='success'/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} minLength={8} maxLength={16} placeholder="   Enter your Password" required/>
        </div>
        <button type="submit"> <LoginIcon sx={{color:'white'}} fontSize='large' color='success' className='icon'/>  Login</button>
        <Link to="/signup" style={{textDecoration:"none"}}><h5>New? Click Here..</h5></Link>
      </form> 
    </div>
 
 
  </div>
    </>
  );
}

export default Login;
