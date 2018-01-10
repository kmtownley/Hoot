import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Searchbar from '../searchbar/searchbar';
import BusinessIndexContainer from '../businesses/business_index_container';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let query = ""

    this.props.fetchBusinesses(query);
  }

  render() {

    return (
      <main className="landing-main-content">
        <div className="logo-title">
          <Link to="/"><img src={window.staticImages.headerImage} />
          </Link>
        </div>
        <div className="home-search-bar">
          <Searchbar
            className="searchbar-container"
            businesses={this.props.businesses}
          />
        </div>
        <section
          className="biz-index-title">
          Hot & Awesome Businesses
        </section>

      </main>
    );
  }
}
