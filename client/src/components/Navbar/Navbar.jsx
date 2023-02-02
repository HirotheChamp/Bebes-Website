import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div id='navbar'>
        <ul id="navbar-items">
            <li className='navbar-list'>Home</li>
            <li className='navbar-list'>Discography</li>
            <li className='navbar-list'>Photo Edit</li>
            <li className='navbar-list'>About Me</li>
        </ul>
    </div>
  )
}

export default Navbar;