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

  const profileLogout = (
    <div className="header-button-container">
      <button
        className="header-button">
        <Link to="/user">Profile</Link>
      </button>
      {logout}
    </div>
  );

  const login = (
    <button className="login">
      <Link to="/login"> Login</Link>
    </button>
  );

  const signup = (
    <button className="signup">
      <Link to="/signup"> Sign Up </Link>
    </button>
  );

  const loginSignupLanding = (
    <div className="header-button-container">
      {login}
      {signup}
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

   if (props.currentUser && navClass !== "nav-landing" )  {
    navContents = (
      <div className="hoot-logo-container-left">
        {hootLogo}
        <SearchBarContainer />
        {profileLogout}
      </div>
    );
  } else if (props.currentUser) {
    navContents = (
      <div className="nav-landing-container">
        {profileLogout}
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
      <SearchBarContainer />
      <div className="login-signup-reg">
      {login}
      {signup}
      </div>
    </div>
  } else {
    navContents = (
    <div>
      {loginSignupLanding}
    </div>
    );
  }


  if (props.location.pathname === '/') {
    return (
      <div className="main-content-wrapper">
        <div className={navClass}>
            {navContents}
        </div>
      </div>
    );
  } else {
    return (
    <div className="main-nav-container">
      <div className="main-header-container">
        <div className="main-content-wrapper">
          <div className={navClass}>
            <div>
            {navContents}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default AuthNavbar;
