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
    <Route path='/bill' element={<Billing/>}/>
    <Route path='/list' element={<ReservedList/>}/>
    
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
