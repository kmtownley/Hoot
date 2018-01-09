import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchContainer from '../search/search_container';
import BusinessIndexContainer from '../businesses/business_index_container';

export default class Homepage extends React.Component {
  render() {
    return (
      <main className="landing-main-content">
        <div className="logo-title">
          <Link to="/search"><img src={window.staticImages.headerImage} />
          </Link>
        </div>
        <div className="home-search-bar">
        </div>
        <BusinessIndexContainer />
        
      </main>
    );
  }
}
