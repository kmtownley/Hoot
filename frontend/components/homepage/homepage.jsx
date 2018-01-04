import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

export default class Homepage extends React.Component {
  render() {
    return (
      <main className="landing-main-content">
        <div className="navbar-container"><NavbarContainer /></div>
        <div className="logo-title">
          <img src={window.staticImages.headerImage} />
        </div>
      </main>
    );
  }
}
