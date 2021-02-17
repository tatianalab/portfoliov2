import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';


function Nav(){
  const [click,setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to='/' className="navbar-logo">
          Tatiana Labrousse
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <HashLink smooth to="/#projects" className='nav-links' onClick={closeMobileMenu}>Projects</HashLink>
            </li>
            <li className="nav-item">
              <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link>
            </li>
            <li className="nav-item">
            <Link to="/files/tatianalabrousse-cv.pdf" target="_blank" download className='nav-links' onClick={closeMobileMenu}>C.V</Link>
            </li>
          </ul>

      </div>
    </nav>
    </>
    )
}

export default Nav;


