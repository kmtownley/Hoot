import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavContainer from '../auth_navbar/auth_nav_container';

class Navbar extends React.Component {

  switchNavStyle() {
    if (this.props.pathname === `/businesses/:businessId`) {

      return (
        <div className="top-red-bar">
          <img src={window.staticImages.headerImage} />
        </div>
      )
    }
  }

  render() {
    return (
      <main>
        {this.switchNavStyle()}
      <AuthNavContainer />
      </main>
    );
  }
}

export default Navbar;
