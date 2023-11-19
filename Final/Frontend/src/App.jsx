import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home'
import RoomDesc from './Pages/RoomDesc'
import BookingDetails from './Pages/BookingDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Faq from './Components/Faq'
import Dashboard from './Pages/Dashboard'
import ContactUs from './Pages/ContactUs'
import Feedback from './Pages/Feedback'
import AboutUs from './Pages/AboutUs'
import ReservedList from './Pages/ReservedList'
import RegisteredList from './Pages/RegisteredList'
import ContactList from './Pages/ContactList'
import FeedbackList from './Pages/FeedbackList'
import Signup from './Pages/Signup'
import Loading from './Components/Loading'
import AdminLoading from './Components/AdminLoading'
import RoomDesc2 from './Pages/RoomDesc2'
import RoomDescVip from './Pages/RoomDescVip'
import RoomDescLux from './Pages/RoomDescLux'
import Profile from './Pages/Profile'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/loading' element={<Loading/>}/>
    <Route path='/adminloading' element={<AdminLoading/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile/:bookingid' element={<Profile/>}/>
    <Route path='/roomdesc' element={<RoomDesc/>}/>
    <Route path='/roomdesc2' element={<RoomDesc2/>}/>
    <Route path='/roomdescvip' element={<RoomDescVip/>}/>
    <Route path='/roomdesclux' element={<RoomDescLux/>}/>
    <Route path='/bookings' element={<BookingDetails/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/reservelist' element={<ReservedList/>}/>
    <Route path='/registerlist' element={<RegisteredList/>}/>
    <Route path='/contactlist' element={<ContactList/>}/>
    <Route path='/feedbacklist' element={<FeedbackList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
