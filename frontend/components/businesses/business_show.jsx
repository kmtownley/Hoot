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
          <div className="first-line-address">
            <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            <span>{business.address}</span>&nbsp;
          </div>
          <div className="second-line-address">
            <div>{business.city}</div>,&nbsp;
            <div>{business.state}</div>,&nbsp;
            <div>{business.zipcode}</div>
          </div>
        </span>
    )
  }

  phone() {
    const business = this.props.business;
    return (
      <div className="phone">
        <i className="fa fa-phone fa-2x"></i>
        <div>{business.phone_number}</div>
      </div>
    )
  }

  reviewButton() {
    return (
      <div>
        <Link className="write-review-button" to={`/businesses/${this.props.business.id}/reviews/new`}>Write a Review</Link>
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
      return <div>Loading...
         <i className="fa fa-spinner fa-pulse"></i>
        </div>
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
            <div className="location-container">
              <BusinessMap
                businesses={this.props.businesses}
                businessId={this.props.businessId}
                singleBusiness={true}
                fetchBusiness={fetchBusiness}
              />
              <ul className="location-container-text">
                <li>{this.address()}</li>
                <li>{this.phone()}</li>
              </ul>
            </div>
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
