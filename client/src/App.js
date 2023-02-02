import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';


function App() {
  return (
   
    <BrowserRouter>
   
    <Navbar/>
     <Routes>

    
    
   
       <Route path='/' exact element={<Home/>} />  
       <Route path='/services' exact element={<Services/>} />  
       <Route path='/about' exact element={<About/>} />  
       <Route path='/contact' exact element={<Contact/>} />  
    
    </Routes>

    </BrowserRouter>
  );
}

export default App;
