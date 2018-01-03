import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link> or 
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const greetingMessage = (currentUser, logout) => (
  <div className="header-greeting">
    <h3 className="header-name"> Welcome, { currentUser.username }!</h3>
    <button
      className="header-button"
      onClick={logout}>Logout
    </button>
  </div>
);

const Greeting = ({ currentUser, logout}) => (
  currentUser ? greetingMessage(currentUser, logout) : sessionLinks()
);

export default Greeting;
