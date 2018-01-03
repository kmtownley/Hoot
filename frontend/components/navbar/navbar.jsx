import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="top-red-bar">
    <header>
       <div className="hoot-div">
         <Link to={'/'} className="hoot-link">hoot</Link>
       </div>
    </header>
    <nav className="login-signup">
      <Link to="/login"> Login </Link>
      <Link to="/signup"> Sign Up </Link>
    </nav>
  </div>
);

const navbarMessage = (currentUser, logout) => (
  <div className="header-navbar">
    <h3 className="header-name"> Welcome, { currentUser.username }!</h3>
    <button
      className="header-button"
      onClick={logout}>Logout
    </button>
  </div>
);

const Navbar = ({ currentUser, logout}) => (
  currentUser ? navbarMessage(currentUser, logout) : sessionLinks()
);

export default Navbar;
