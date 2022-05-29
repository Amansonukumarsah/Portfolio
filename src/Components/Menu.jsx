import React from 'react'
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className='Menu'>
        <ul className='Navbar'>
          <li>
            <NavLink className='Nav ' exact to=''>Home</NavLink>
          </li>
        </ul>
        <ul className='Navbar'>
          <li>
            <NavLink exact className='Nav mx-5' to=''>EDUCATION</NavLink>
          </li>
        </ul>
        <ul className='Navbar'>
          <li>
            <NavLink exact className='Nav mx-5' to=''>ACHIEVEMENTS</NavLink>
          </li>
        </ul>
        <ul className='Navbar'>
          <li>
            <NavLink exact className='Nav mx-5' to=''>HOBBIES</NavLink>
          </li>
        </ul>
        <ul className='Navbar'>
          <li>
            <div className='navcontact'>
              <NavLink exact className='Nav Nav1 mx-5' to=''>CONTACT</NavLink>
              <div className="bg-success contact"></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu;
