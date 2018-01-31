import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  createBizNumber() {
    let bizName;
    let num;
    this.props.businesses.each(key => {
      return (
        <div>
          idx. businesses[key].biz_name
        </div>
      );
    });
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
            <Link to={`businesses/${business.id}`}  className="biz-hot-name">{this.props.num}{biz_name}</Link>
          <br/>
          <span
            className={`star-rating-search-${rating}`}>
          </span>
          <br/>
          <span>{this.renderPrice()} - {cuisine}</span>
            <div className="biz-index-city">{city}</div>
          <br/>
        </section>
      </li>
    );
  }

  renderPrice() {
    return (
      <span className="money-signs-biz-idx">
        {Array(this.props.business.price + 1).join("$")}

      </span>
    );
  }

  renderBizSearchIndex() {
    const { biz_name, rating, cuisine, address, city, state, zipcode, image_url, price, phone_number } = this.props.business;
    const business = this.props.business;
    if (this.props.pathname === "/businesses/:businessId" || this.props.pathname === "/search") {
    return (
      <li className="biz-index-item">
        <section>
          <div
            className="biz-index-img"
            style={{backgroundImage: `url(${image_url})`}}>
          </div>
        </section>
        <section
          className="biz-show-categories">
            <Link to={`businesses/${business.id}`}  className="biz-index-name">{this.props.num}. {biz_name}</Link>
          <br/>
          <span
            className={`star-rating-search-${rating}`}>
          </span>
          <div className="search-biz-cuisine">{this.renderPrice()} - {cuisine}</div>
          <br/>
          </section>
          <section className="search-biz-address-container">
            <ul className="search-biz-address">
              <li>{address}</li>
              <li>{city}, {state}, {zipcode}</li>
              <li>{phone_number}</li>
            </ul>
          </section>
          <br/>
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
