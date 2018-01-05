import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavContainer from '../auth_navbar/auth_nav_container'
// import NavbarContainer from '../navbar/navbar_container';

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
    <div>
      <ul>
        <li className="map-box">Map</li>
        <span className="street-address">
          <li>{business.address}</li>
          <div>
            <div className="city-state">{business.city}</div>,&nbsp;
            <div className="city-state">{business.state}</div>, &nbsp;
            <div>{business.zipcode}{business.phone_number}</div>
          </div>
        </span>
      </ul>
    </div>
    )
  }

  reviewButton() {
    return (
      <div>
        <Link className="write-review-button" to="/">Write a Review</Link>
      </div>
    )
  }

  render() {
    const business = this.props.business;
    if (!business) {
      return <div>Loading</div>
    }
    return (
      <div>
        <AuthNavContainer />
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
              {this.address()}
            </ul>
            <img className="biz-image"  src={this.props.business.image_url} />
          </span>
        </main>
      </div>
    )
  }
}

export default BusinessShow;
