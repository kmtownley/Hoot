import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthNavbarContainer from '../auth_navbar/auth_nav_container';

export default class Homepage extends React.Component {
  render() {
    return (
      <main className="landing-main-content">
        <div className="auth_navbar-container"><AuthNavbarContainer /></div>
        <div className="logo-title">
          <img src={window.staticImages.headerImage} />
        </div>
      </main>
    );
  }
}
