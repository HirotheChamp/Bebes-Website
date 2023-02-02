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
            <a href="/"><li >Home</li></a>
            <a href="/services"><li >Services</li></a>
            <a href="/contact"><li>Contact Me</li></a>
            <a href="/about"><li>About Me</li></a>
        </ul>
        </nav>
    </header>
  )
}

export default Navbar;