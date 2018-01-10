import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  listStyle() {
    let className;
    let biz_image;
    if (this.props.pathname === "/businesses/:businessId") {
      return (
        className = "biz-index-item"
      );
      } else {
      return (
        className = "biz-hot-item"
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
        <div className="biz-image-2" style={{backgroundImage: `url(${image_url})`}}></div>
        <section className="business-index-categories">
          <Link to={`businesses/${business.id}`}  className="biz-index-name">{biz_name}</Link>
          <br/>
          <span className="rating">Rating: {rating}</span>
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
