import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container';
import BusinessShowMap from '../business_map/business_show_map';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.business;
  }

  componentDidMount() {         this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.businessId !== nextProps.match.params.businessId) {
      this.props.fetchBusinesses();
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
    );
  }

  phone() {
    const business = this.props.business;
    return (
      <div className="phone">
        <i className="fa fa-phone fa-2x"></i>
        <div>{business.phone_number}</div>
      </div>
    );
  }

  reviewButton() {
    return (
      <div>
        <Link className="write-review-button" to={`/businesses/${this.props.business.id}/reviews/new`}>
          <i className="fa fa-star" aria-hidden="true"></i>
          Write a Review
        </Link>
      </div>
    );
  }

  businessDetails() {
    return (
      <div className="biz-details-container">
        <ul className="biz-details">
          <div>Soon to be Details</div>
        </ul>
      </div>
    );
  }

  render() {
    debugger
    const business = this.props.business;
    if (!business) {
      return <div>Loading...
         <i className="fa fa-spinner fa-pulse"></i>
        </div>
    }
    return (
        <main className="main-content-container">
          <section className="biz-header-container">
            <div className="biz-header">
              <span className="biz-show-title">{business.biz_name}</span>
              <ul>
                <li className="biz-rating">
                    <div className={`star-rating-search-${this.props.business.rating}`}>
                  </div>
                </li>
                <li className="biz-cuisine">{business.cuisine}</li>
              </ul>
            </div>
          <span className="review-button-container">
            {this.reviewButton()}
          </span>
        </section>
          <span className="location-with-imgs">
            <div className="location-container">
              <BusinessShowMap
                business={business}
                path={this.props.match.path}
                updateBounds={this.props.updateBounds}
              />
              <ul className="location-container-text">
                <li>{this.address()}</li>
                <li>{this.phone()}</li>
              </ul>
            </div>
            <div className="biz-image-container">
              <img className="biz-image" src={this.props.business.image0}/>
              <img className="biz-image"  src={this.props.business.image_url} />
              <img className="biz-image" src={this.props.business.image1} />
            </div>
          </span>
          <section>
            {this.businessDetails()}
            <div className="reviews-main">
              <ReviewIndexContainer />
            </div>
          </section>

        </main>

    );
  }
}

export default BusinessShow;
