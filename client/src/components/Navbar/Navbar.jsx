import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='navbar'>
  <div className='navbar-logo'>
<h1>SeRi Photography</h1>
</div>

      <nav className='navbar-items'>
    
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Me</a></li>
            <li><a href="/about">About Me</a></li>
        </ul>
        </nav>
    </header>
  )
}

export default Navbar;