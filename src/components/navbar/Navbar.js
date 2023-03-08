import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar() {
  return (
    <>
    <nav className='navbar'>
            <ul>
                <li className='nav-item'>
                    <Link to='/' className='links'>
                        Acasa
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Istorie' className='links'>
                        Istorie
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Imagini' className='links'>
                        Imagini
                    </Link>
                </li>
            </ul>
    </nav>
    </>
  )
}

export default Navbar