import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  const ToggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='containers'>
      <div className="logo">
      <Link to='./' >Movie Land</Link>
      </div>
      <div className={`nav-link ${isMenuOpen ?'active':''} `}>
        <Link to='/' >Home</Link>
        <Link to='./About' >About</Link>
      </div>
      <FaBars className='menu' onClick={ToggleMenu}/> 
    </div>
  )
}

export default Navbar