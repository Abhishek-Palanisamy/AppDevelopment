import React, { useEffect } from 'react'
import '../Assests/CSS/Loading.css'
import { useNavigate } from 'react-router-dom';
function Loading() {
  const navigate = useNavigate();
    useEffect(() => {
        var counter = 0;
        var c = 0;
        var i = setInterval(function () {
          document.querySelector(".loading-page .counter h1").innerHTML = c + "%";
          document.querySelector(".loading-page .counter hr").style.width = c + "%";
    
          counter++;
          c++;
    
          if (counter === 101) {
            clearInterval(i);
          }
        }, 50);
        const timer = setTimeout(() => {
          navigate('/');
        }, 5000);
      
        return () => clearTimeout(timer); 
      }, [navigate]);
    
  return (
    <>
    <div class="loading-page">
      <div class="counter">
        <h1>0%
        </h1>
        <hr/>
      </div>
    </div>
    </>
  )
}

export default Loading