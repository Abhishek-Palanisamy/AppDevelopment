import React, { useEffect } from 'react'
import '../Assets/CSS/Loading.css';
import { useNavigate } from 'react-router-dom';
function Loading() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);
  
    return () => clearTimeout(timer); 
  }, [navigate]);
  return (
    <div className='loading'>
    <p>Loading...</p>
    </div>
  )
}



export default Loading