import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

export default class Homepage extends React.Component {
  render() {
    return (
      <main className="landing-main-content">
        <NavbarContainer />
        <div className="landing-image">
          <img src={window.staticImages.homepageImage} />
        </div>
        <div className="logo-title">
          <img src={window.staticImages.headerImage} />
        </div>
      </main>
    );
  }
}
