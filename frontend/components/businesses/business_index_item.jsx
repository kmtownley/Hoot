import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHompageBizCard() {
    const { biz_name, rating, cuisine, address, city, state, zipcode, image_url, price } = this.props.business;
    const business = this.props.business;
    return (
      <li
        className="biz-hot-item"
        onClick={this.handleClick}>
        <div
          className="biz-hot-img"
          style={{backgroundImage: `url(${image_url})`}}>
        </div>
        <section
          className="hot-biz-category">
            <Link to={`businesses/${business.id}`}  className="biz-hot-name">{biz_name}</Link>
          <br/>
          <span
            className={`star-rating-search-${rating}`}>
          </span>
          <br/>
          <span>{cuisine}</span>
            <div className="biz-index-city">{city}</div>
          <br/>
        </section>
      </li>
    );
  }

  renderBizSearchIndex() {
    const { biz_name, rating, cuisine, address, city, state, zipcode, image_url, price } = this.props.business;
    const business = this.props.business;
    if (this.props.pathname === "/businesses/:businessId" || this.props.pathname === "/search") {
    return (
      <li
        className="biz-index-item"
        onClick={this.handleClick}>
        <div
          className="biz-index-img"
          style={{backgroundImage: `url(${image_url})`}}>
        </div>
        <section
          className="biz-show-categories">
            <Link to={`businesses/${business.id}`}  className="biz-index-name">{biz_name}</Link>
          <br/>
          <span
            className={`star-rating-search-${rating}`}>
          </span>
          <br/>
          <span>{cuisine}</span>
          <div className="search-biz-address-container">
            <ul className="search-biz-address">
              <li>{address}</li>
              <li>{city}, {state}, {zipcode}</li>
            </ul>
          </div>
          <br/>
        </section>
      </li>
      );
    }
  }

  render() {
    if (this.props.pathname === "/businesses/:businessId" || this.props.pathname === "/search") {
    return (
      <div>
        {this.renderBizSearchIndex()}
      </div>
      );
    } else {
      return (
        <div>
          {this.renderHompageBizCard()}
        </div>
      );
    }
  }
}

export default BusinessIndexItem;
