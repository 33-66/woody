import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function NavBar() {
  const navLinks = [
    { to: 'home', text: 'Home' },
    { to: 'about', text: 'About Us' },
    { to: 'donations', text: 'Donations' },
    // Add more navigation links as needed
  ];

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {navLinks.map((link, index) => (
          <li key={index} className='nav-item'>
            <Link to={link.to} className='nav-link'>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
