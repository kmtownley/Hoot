import React from 'react';
import { Link } from 'react-router-dom';


const AuthNavbar = (props) => {
  let navContents;
  let navClass;

  const hootLogo = (
    <Link to="/" className="hoot-logo">
      <img src={window.staticImages.headerImage} />
    </Link>
  )

  const logout = (
    <button
      className="header-logout"
      onClick={props.logout}>
      <Link to="/">Logout</Link>
    </button>
  )

  const login_signup = (
    <div>
      <nav className="login">
        <Link to="/login"> Login </Link>
      </nav>
      <nav className="signup">
        <Link to="/signup"> Sign Up </Link>
      </nav>
    </div>
  )


  if (props.location.pathname === '/') {
    navClass = "nav-landing";
  } else if (props.location.pathname === '/businesess/:business_id') {
    navClass = "nav-business-show"
  } else {
    navClass = 'nav-regular';
  }

  if (props.currentUser && navClass !== "nav-landing"){
    navContents = (
      <div className="hoot-logo-container-left">
        {hootLogo}
        {logout}
      </div>
    )
  } else if (props.currentUser) {
    navContents = (
      <div className="nav-landing-container">
        {logout}
      </div>
    )
  } else if (props.location.pathname === '/login' || props.location.pathname === '/signup') {
    navContents = (
      <div className="hoot-logo-container-center">
        {hootLogo}
      </div>
    )
  } else if (!props.currentUser && navClass !== "nav-landing"){
    navContents =
    <div className="hoot-logo-container-left">
      {hootLogo}
      <div className="signup-signin-no-user">
        <nav className="login-no-user">
          <Link to="/login"> Login </Link>
        </nav>
        <nav className="signup-no-user">
          <Link to="/signup"> Sign Up </Link>
        </nav>
      </div>
    </div>
  } else {
    navContents = (
    <div>
      {login_signup}
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
