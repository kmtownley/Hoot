import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="top-red-bar">
    <header>
       <div className="hoot-div">
         <Link to={'/'} className="hoot-link-image">
         <img src={window.staticImages.headerImage} />
        </Link>
       </div>
    </header>
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
