import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const { biz_name, rating, cuisine, address, city, state, zipcode, description, image_url } = this.props.business;
    const business = this.props.business;

    return (
      <li
        className="business-index-item"
        onClick={this.handleClick}>
        <img src={image_url} />
        <section className="business-index-categories">
          <Link to={`businesses/${business.id}`}  className="biz-index-name">{biz_name}</Link>
          <br/>
          <span className="rating">Rating: {rating}</span>
          <br/>
          <span>{cuisine}</span>
          <div className="biz-index-address">
            <span className="biz-index-street">{address}</span>
            <br/>
            <span className="biz-index-city">{city}</span>
            <span className="biz-index-state">{state}</span>
            <br/>
            <span className="biz-index-zipcode">{zipcode}</span>
          </div>
          <br/>
          <span className="biz-index-description">{description}</span>
        </section>
      </li>
    )
  }

}

export default BusinessIndexItem;
