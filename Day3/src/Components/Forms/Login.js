import React, { useState } from 'react'
import './Styles.css';
function Login() {
  const[uname,setUname]=useState("");
  const[password,setPassword]=useState("");
  const authenticate=(e)=>{
    e.preventDefault();
    if(uname.length==0){
      alert("Enter Username")
    }
    else if(password.length==0){
      alert("Enter Password")
    }
  }
  return (
    <div className='container'>
    <div className='login-box'>
    <center><h2>Login</h2></center>
    <form>
    <div className='user-box'>
    <label>Username</label>{" "}
    <input type='text' value={uname} onChange={(e)=>setUname(e.target.value)} /><br/>
    </div>
    <div className='user-box'>
    <label>Password</label> &nbsp;
    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
    </div>
    <div className='btn'>
    <button type='submit' onClick={authenticate}>Submit</button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Login