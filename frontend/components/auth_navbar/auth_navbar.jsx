import React from 'react';
import { Link } from 'react-router-dom';


const AuthNavbar = (props) => {
  let navContents;
  let navClass;
  const hootLogo = (<Link className="hoot-logo-container" to="/">
    <img src={window.staticImages.headerImage} />
  </Link>);

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
  } else if (props.location.pathname === '/login' || props.location.pathname === '/signup') {
    navContents = hootLogo
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

  if (props.location.pathname !== '/') {

  }
  return (
    <header className={navClass}>
      {navContents}
    </header>
  )
}


export default AuthNavbar;
