import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../searchbar/searchbar_container';


const AuthNavbar = (props) => {
  let navContents;
  let navClass;

  const hootLogo = (
    <Link to="/" className="hoot-logo">
      <img src={window.staticImages.headerImage} />
    </Link>
  );

  const logout = (
    <button
      className="header-button"
      onClick={props.logout}>
      <Link to="/">Logout</Link>
    </button>
  );

  const login_signup = (
    <div>
      <nav className="login">
        <Link to="/login"> Login </Link>
      </nav>
      <nav className="signup">
        <Link to="/signup"> Sign Up </Link>
      </nav>
    </div>
  );

  const profile = (
    <button
      className="header-button">
      <Link to="/user">Profile</Link>
    </button>
  );


  if (props.location.pathname === '/') {
    navClass = "nav-landing";
  } else if (props.location.pathname === '/businesess/') {
    navClass = "nav-business-show";
  } else {
    navClass = 'nav-regular';
  }

  if (props.currentUser && props.location.pathname === "/user") {
    navContents = (
      <div className="hoot-logo-container-left">
        {hootLogo}
        {logout}
      </div>
    );
  } else if (props.currentUser && navClass !== "nav-landing" )  {
    navContents = (
      <div className="hoot-logo-container-left">
        {hootLogo}
        <div className="profile-logout-container">
        {profile}
        {logout}
        </div>
      </div>
    );
  } else if (props.currentUser) {
    navContents = (
      <div className="nav-landing-container">
        {profile}
        {logout}
      </div>
    );
  } else if (props.location.pathname === '/login' || props.location.pathname === '/signup') {
    navContents = (
      <div className="hoot-logo-container-center">
        {hootLogo}
      </div>
    );
  } else if (!props.currentUser && navClass !== "nav-landing"){
    navContents =
    <div className="hoot-logo-container-left">
      {hootLogo}
      <div className="no-user-searchbar">
        
      </div>
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
    );
  }

  return (
    <div className={navClass}>
      {navContents}
    </div>
  )
}


export default AuthNavbar;
