import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class Homepage extends React.Component {
  render() {
    return (
      <main className="landing-main-content">
        <div className="logo-title">
          <img src={window.staticImages.headerImage} />
        </div>
      </main>
    );
  }
}
