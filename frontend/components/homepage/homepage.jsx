import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchFormContainer from '../search/search_container';

export default class Homepage extends React.Component {
  render() {
    return (
      <main className="landing-main-content">
        <div className="logo-title">
          <img src={window.staticImages.headerImage} />
        </div>
        <div className="home-search-bar">
          <SearchFormContainer />
        </div>
      </main>
    );
  }
}
