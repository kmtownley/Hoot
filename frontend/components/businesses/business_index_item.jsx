import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.listStyle = this.listStyle.bind(this);
    this.categoryStyle = this.categoryStyle.bind(this);
    this.bizNameStyle = this.bizNameStyle.bind(this);
  }

  listStyle() {

    let className;
    if (this.props.pathname === "/businesses/:businessId" || this.props.pathname === "/search") {
      return (
        className = "biz-index-item"
      );
      } else {
      return (
        className = "biz-hot-item"
      );
    }
  }

  listItemImg() {
    let bizImg;
    if (this.props.pathname === "/businesses/:businessId" || this.props.pathname === "/search") {
      return (
        bizImg = "biz-show-image"
      );
    } else {
      return (
      bizImg =  "biz-hot-img"
      );
    }
  }

  categoryStyle() {
    let categoryStyle;
    if (this.props.pathname === "/businesses/:businessId" || this.props.pathname === "/search") {
      return (
        categoryStyle= "biz-show-categories"
      );
    } else {
      return (
      categoryStyle = "hot-biz-category"
      )
    }
  }

  bizNameStyle() {
    let bizNameStyle;
    if (this.props.pathname === "/businesses/:businessId" || this.props.pathname === "/search") {
      return (
        bizNameStyle = "biz-index-name"
      );
    } else {
      return (
        bizNameStyle = "biz-hot-name"
      );
    }
  }

  render() {

    const { biz_name, rating, cuisine, address, city, state, zipcode, image_url, price } = this.props.business;
    const business = this.props.business;
    return (
      <li
        className={this.listStyle()}
        onClick={this.handleClick}>
        <div
          className={this.listItemImg()}
          style={{backgroundImage: `url(${image_url})`}}>
        </div>
        <section
          className={this.categoryStyle()}>
            <Link to={`businesses/${business.id}`}  className={this.bizNameStyle()}>{biz_name}</Link>
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

}

export default BusinessIndexItem;
