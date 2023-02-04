import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import Services from './pages/Services/Services';


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
<Footer/>
    </BrowserRouter>
  );
}

export default App;
