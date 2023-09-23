import './App.css'
import Loading from './Components/Loading';

import AboutUs from './Pages/AboutUs';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Signup from './Pages/Signup'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Travel from './Pages/Travel';
import Profiles from './Pages/Profiles';
import ContactUs from './Pages/ContactUs'
import TermsConditions from './Pages/TermsConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Feedback from './Pages/Feedback';
import Faq from './Pages/Faq';
import RoomDes from './Components/RoomDes';

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
    <Route path='/travel' element={<Travel/>}/>
    <Route path='/profile' element={<Profiles/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/terms' element={<TermsConditions/>}/>
    <Route path='/privacy' element={<PrivacyPolicy/>}/>
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path='/roomdes' element={<RoomDes/>}/>
    
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
