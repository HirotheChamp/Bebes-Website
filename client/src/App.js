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
import Commercial from './pages/Commercial/Commercial';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import Portraits from './pages/Portraits/Portraits';
import Services from './pages/Services/Services';
import Sports from './pages/Sports/Sports';


function App() {
  return (
   
    <BrowserRouter>
   
    <Navbar/>
     <Routes>

    
    
   
       <Route path='/' exact element={<Home/>} />  
       <Route path='/portraits' exact element={<Portraits/>} />  
       <Route path='/services' exact element={<Services/>} />  
       <Route path='/about' exact element={<About/>} />  
       <Route path='/contact' exact element={<Contact/>} />  
       <Route path='/commercial' exact element={<Commercial/>} />  
       <Route path='/sports' exact element={<Sports/>} />
    
    </Routes>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
