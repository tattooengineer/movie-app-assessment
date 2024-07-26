// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MovieApp</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">By Lakshay</Link></li>
        
        </ul>
      </nav>
    </header>
  );
}

export default Header;
