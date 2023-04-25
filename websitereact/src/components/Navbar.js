

import React, {useState} from 'react'
import logo from '../photo/pizzaLogo.png'
import { Link } from 'react-router-dom'
import TocIcon from '@mui/icons-material/Toc';
import '../Style/Navbar.css'


export function Navbar() {
  
  const [openlinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openlinks)
  }

  return (
    <div className='navbar'>
      <div className="leftSide" id={openlinks ? 'open' : 'close'}>
        <img src={logo} alt="" />
         <div className="hiddenLinks ">
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>  
         </div>
      </div>

        <div className="rightSide">
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>
            
            <button onClick={toggleNavbar}>
               <TocIcon color="white" />
            </button>
        </div>
    </div>
  )
}

