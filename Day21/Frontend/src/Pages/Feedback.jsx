import React, { useState } from 'react';
import '../Assets/CSS/Feedback.css'; 
import Navbar1 from '../Components/Navbar1';
import Sidebar1 from '../Components/Sidebar1';
import Footer from '../Components/Footer';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import axios from 'axios';


function FeedbackForm() {
  const [name, setName] = useState('');
  const [cleanliness, setCleanliness] = useState("");
  const [comfort, setComfort] = useState("");
  const [amenities, setAmenities] = useState("");
  const [valueformoney, setValueForMoney] = useState("");
  const [comments, setComments] = useState('');
  const [stay, setStay] = useState('');
  const [help, sethelp] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    const feedback={name,cleanliness,comfort,amenities,valueformoney,comments,stay,help}
    console.log(feedback);
    axios.post("http://localhost:8081/auth/postfeedback",feedback)
    nav("/home")
  };

  return (
    <>
    <Navbar1/>
    <Sidebar1/>
    <div className="feedback-container">
      <h1 className="feedback-title">Feedback Form</h1>
      <form onSubmit={handleFormSubmit} className="feedback-form">
        <label className="feedback-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="feedback-input"
          />
        </label>

        <h3 className="satisfaction-title">Satisfaction Scale (1 to 5):</h3>

        <label className="feedback-label">
          Cleanliness:
<input type='number' onChange={(e)=>setCleanliness(e.target.value)}/>
        </label>

        <label className="feedback-label">
          Comfort:
          <input type='number' onChange={(e)=>setComfort(e.target.value)}/>

        </label>

   
        <label className="feedback-label">
        Amenities:
        <input type='number' onChange={(e)=>setAmenities(e.target.value)}/>

      </label>

        <label className="feedback-label">
          Value for Money:
          <input type='number' onChange={(e)=>setValueForMoney(e.target.value)}/>

        </label>
        <label className="feedback-label">
        What did you like about your stay?
      <textarea value={stay} onChange={(e)=>setStay(e.target.value)} className="feedback-text"/>
          
      </label>
        <label className="feedback-label">
        Were the staff members helpful and courteous?
        <textarea value={help} onChange={(e)=>sethelp(e.target.value)} className="feedback-text"/>
      </label>

        <label className="feedback-label">
          Comments:
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="feedback-textarea"
          />
        </label>

        <button type="submit" className="submit-button">Submit</button>
        {isRegistered && (
          <div className="success-popup">
            <div className="success-popup-content">
              <h3>Submitted Successfully</h3>
              <Link to='/home'><button className='btn1'>Done</button></Link>
            </div>
          </div>
        )}
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default FeedbackForm;
