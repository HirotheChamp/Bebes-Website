import React, {useState} from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'
import { navItems } from './NavItems'
import Dropdown from '../Dropdown/Dropdown'


const Navbar = () => {
const [dropdown, setDropdown] = useState(false)
  return (
    <nav className='navbar'>
 
<Link to="/" className='navbar-logo'><h1>SeRi Photography</h1>
</Link>

<ul className='nav-items'>
  { navItems.map((item) => {

if (item.title === "More") {
  return (
    <li key={item.id} className={item.cName}>
      <Link 
      to={item.path} 
      onMouseEnter={() => setDropdown(true)} 
      onMouseLeave = {() => setDropdown(false)}
      >
        {item.title}
        </Link>
      {dropdown && <Dropdown/>}
    </li>
    )
}
  return (
  <li key={item.id} className={item.cName}>
    <Link to={item.path}>{item.title}</Link>
  </li>
  )
  })}
</ul>

    </nav>
  )
}

export default Navbar;