import './App.css'
import Loading from './Components/Loading';

import AboutUs from './Pages/AboutUs';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Signup from './Pages/Signup'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './Pages/ContactUs'
import TermsConditions from './Pages/TermsConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Feedback from './Pages/Feedback';
import Faq from './Pages/Faq';
import RoomDes from './Components/RoomDes';
import Billing from './Pages/Billing';
import ReservedList from './Components/ReservedList';
import Billing1 from './Pages/Billing1';
import BookingDetails from './Components/BookingDetails';
import RegisteredList from './Components/RegisteredList';
import FeedbackList from './Pages/FeedbackList';
import ContactList from './Pages/ContactList';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>    
    <Route path='/load' element={<Loading/>}/>
    <Route path='/home' element={<HomePage/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/terms' element={<TermsConditions/>}/>
    <Route path='/privacy' element={<PrivacyPolicy/>}/>
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path='/roomdes' element={<RoomDes/>}/>
    <Route path='/list' element={<ReservedList/>}/>
    <Route path='/booking' element={<BookingDetails/>}/>
    <Route path='/registered' element={<RegisteredList/>}/>
    <Route path='/feedbacklist' element={<FeedbackList/>}/>
    <Route path='/contactlist' element={<ContactList/>}/>
    
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
