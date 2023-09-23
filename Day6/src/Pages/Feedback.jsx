import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import Navbar1 from '../Components/Navbar1';
import Sidebar1 from '../Components/Sidebar1';
import Footer from '../Components/Footer';
import '../Assets/CSS/Feedback.css'

export default function CustomStarColor() {
  return (
    <div className='containersr'>
    <Navbar1/>
    <Sidebar1/>
    <div className='containerstar'>
    <Stack spacing={1}>
      <Rating
        name="custom-star-color"
        defaultValue={0}
        precision={1}
        IconContainerComponent={StarIcon}
        emptyIcon={<StarIcon style={{ color: 'grey' }} />} 
        icon={<StarIcon style={{ color: 'gold' }} />} 
      />
    </Stack>
    </div>
    <Footer/>
    </div>
  );
}
