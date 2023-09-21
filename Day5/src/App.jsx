import './App.css'
import Footer from './Components/Footer';
import Loading from './Components/Loading';
import Navbar1 from './Components/Navbar1';
import Sidebar1 from './Components/Sidebar1';
import AboutUs from './Pages/AboutUs';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Signup from './Pages/Signup'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Travel from './Pages/Travel';
import Profiles from './Pages/Profiles';

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
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
