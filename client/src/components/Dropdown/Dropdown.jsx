import React from 'react'
import './Dropdown.css'
import { moreDropdown } from '../Navbar/NavItems'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Dropdown = () => {
const [dropdown, setDropdown] = useState(false);

  return (
    <div className='dropdown'>
        <ul className={dropdown ? "more-submenu clicked" : "more-submenu"} 
        onClick={()=> setDropdown(!dropdown)}
        >
          {moreDropdown.map(item => {
return (
    <li key={item.id}>
        <Link to={item.path}
        className={item.cName}
        onClick={() => setDropdown(false)}
        >
            {item.title}
        </Link>
    </li>
)
          })}  
        </ul>
        <Dropdown/>
    </div>
  )
}

export default Dropdown