import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchbarContainer from '../searchbar/searchbar_container';
import BusinessIndexContainer from '../businesses/business_index_container';
import BusinessIndexItem from '../businesses/business_index_item';
import Footer from '../footer/footer';

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

  renderFooter() {
    return (
    <ul className="footer-list">
      <li className="footer-list-content">
        <label className="footer-title"> VIEW THE CODE
          <a className="git-link" href="https://github.com/kmtownley/Hoot">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </label>
      </li>
      <li className="footer-list-content" >
        <label  className="footer-title"> MEET THE AUTHOR
          <a className="git-link" href="https://www.linkedin.com/in/kathleen-townley-83b039b8/">
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>
        </label>
      </li>
    </ul>
    );
  }

  render() {

    return (
      <main className="landing-main-content">
        <div className="landing-img"></div>
        <div className="logo-title">
          <img src={window.staticImages.headerImage} />
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
        <Footer />
      </main>

    );
  }
}
