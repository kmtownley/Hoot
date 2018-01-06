import React from 'react';
import { Link } from 'react-router-dom';


const AuthNavbar = (props) => {
  let navContents;
  let navClass;

  if (props.location.pathname === '/') {
    navClass = "nav-landing";
  } else {
    navClass = 'nav-regular';
  }

  if (props.currentUser){
    navContents = (
      <button
        className="header-logout"
        onClick={props.logout}>Logout
      </button>

    )
  } else {
    navContents = (
      <div>
        <nav className="login">
          <Link to="/login"> Login </Link>
        </nav>
        <nav className="signup">
          <Link to="/signup"> Sign Up </Link>
        </nav>
      </div>
    )
  }


  return (
    <header className={navClass}>
      <div>
        {navContents}
      </div>
    </header>
  )
}


export default AuthNavbar;
