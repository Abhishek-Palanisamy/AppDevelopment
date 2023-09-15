import './App.css';
import HomePage from './Pages/HomePage';
import Login1 from './Pages/Login1';
import Signup from './Pages/Signup'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login1/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    
    
  
    </>
  );
}

export default App;
