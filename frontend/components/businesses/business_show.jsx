import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container';
import BusinessMap from '../business_map/business_map';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.business;
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.businessId !== nextProps.match.params.businessId) {
      this.props.fetchBusiness(nextProps.match.params.businessId);
    }
  }

  address() {
    const business = this.props.business;
    return (
        <span className="street-address">
          <div>{business.address}</div>
          <div>
            <div className="city-state">{business.city}</div>,&nbsp;
            <div className="city-state">{business.state}</div>, &nbsp;
            <div>{business.zipcode}</div>
          </div>
        </span>
    )
  }

  reviewButton() {
    return (
      <div>
        <Link className="write-review-button" to="/">Write a Review</Link>
      </div>
    )
  }

  businessDetails() {
    return (
      <div className="biz-details-container">
        <ul className="biz-details">
          <div>Soon to be Details</div>
        </ul>
      </div>
    )
  }

  render() {
    const business = this.props.business;
    if (!business) {
      return <div>Loading</div>
    }
    return (
        <main className="biz-content-container">
          <section className="biz-header-container">
            <div className="biz-header">
              <span className="biz-show-title">{business.biz_name}</span>
              <ul>
                <li className="biz-rating">Rating: {business.rating}</li>
                <li className="biz-cuisine">{business.cuisine}</li>
              </ul>
            </div>
          <span className="review-button-container">
            {this.reviewButton()}
          </span>
        </section>
          <span className="location-with-imgs">
            <ul className="location-container">
              <li><BusinessMap/></li>
              <li className="complete-address">{this.address()}</li>
              <div className="phone">{business.phone_number}</div>
            </ul>
            <img className="biz-image"  src={this.props.business.image_url} />
          </span>
          <section>
            {this.businessDetails()}
            <div className="reviews-main">
              <ReviewIndexContainer />
            </div>
          </section>
        </main>

    )
  }
}

export default BusinessShow;
