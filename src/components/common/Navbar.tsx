import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-[#31005e] p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (`font-semibold transition duration-300 px-6 py-2 rounded-[8px] ${isActive ? 'text-[#31005e] bg-white' : 'text-white'}`)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (`font-semibold transition duration-300 px-6 py-2 rounded-[8px] ${isActive ? 'text-[#31005e] bg-white' : 'text-white'}`)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (`font-semibold transition duration-500 px-6 py-2 rounded-[8px] ${isActive ? 'text-[#31005e] bg-white' : 'text-white'}`)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar