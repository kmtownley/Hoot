import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="top-red-bar">
    <nav className="login">
      <Link to="/login"> Login </Link>
    </nav>
    <nav className="signup">
      <Link to="/signup"> Sign Up </Link>
    </nav>
  </div>
);

const navbarMessage = (currentUser, logout) => (
  <div className="header-navbar">
    <button
      className="header-logout"
      onClick={logout}>Logout
    </button>
  </div>
);

const Navbar = ({ currentUser, logout}) => (
  currentUser ? navbarMessage(currentUser, logout) : sessionLinks()
);

export default Navbar;
