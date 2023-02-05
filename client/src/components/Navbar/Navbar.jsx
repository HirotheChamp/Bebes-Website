import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {






  return (
    <header className='navbar'>
 

      <div className='navbar-items'>
      <div className='navbar-logo'>
<a href="/"><h1>SeRi Photography</h1></a>
</div>
<div className='dropdown'>
<button className='link' data-dropdown-button>Portraits</button>
       <div className='dropdown-items'>
       <a href="/contact" className='link'>Contact</a>
            <a href="/about" className='link'>About Me</a>
            <a href="/services" className='link'>Services</a>
       </div>
       </div> 
            <a href="/sports" className='link'>Sports</a> 
            <a href="/commercial" className='link'>Commercial</a>

              <div className='dropdown'>
              <button className='link' data-dropdown-button>More</button>
              <div className='dropdown-items'>
            <a href="/contact" className='link'>Contact</a>
            <a href="/about" className='link'>About Me</a>
            <a href="/services" className='link'>Services</a>
</div>
            </div> 
        
        </div>
    </header>
  )
}

export default Navbar;