import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchbarContainer from '../searchbar/searchbar_container';
import BusinessIndexContainer from '../businesses/business_index_container';
import BusinessIndexItem from '../businesses/business_index_item';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let query = "";

    this.props.fetchBusinesses();
  }

  awesomeBizs() {

    let hotBizs;
    return (
        <main className="business-index-list">
        <ul>
          {
          this.props.businesses.slice(0, 3).map((biz, idx) => (
            <ul key={`${idx}`}>
              <BusinessIndexItem
                className="business-index-item"
                key={biz.id}
                business={this.props.businesses[idx]}
              />
            </ul>
          ))
          }
        </ul>
      </main>
    );
  }

  render() {

    return (
      <main className="landing-main-content">
        <div className="logo-title">
          <Link to="/search"><img src={window.staticImages.headerImage} />
          </Link>
        </div>
        <div className="home-search-bar">
          <SearchbarContainer
            className="searchbar-container"
          />
        </div>
        <section
          className="biz-index-title">
          Hot & Awesome Businesses
          <div>{this.awesomeBizs()}</div>
        </section>

      </main>
    );
  }
}
