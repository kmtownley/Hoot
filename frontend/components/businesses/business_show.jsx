import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexContainer from '../reviews/review_index_container';
import BusinessShowMap from '../business_map/business_show_map';
import Footer from '../footer/footer';

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

  renderMoney() {
    let n = this.props.business.rating;
    let dollars = Array(n).join("$");
    return (
      <div>
        {dollars}
      </div>
    );
  }

  businessPrice() {
    return (
      <div>Price Range:
        <i className="fa fa-usd" id={`dollar-${this.props.business.price}`} aria-hidden="true"></i>
        <i className="fa fa-usd" id={`dollar-${this.props.business.price}`} aria-hidden="true"></i>
        <i className="fa fa-usd" id={`dollar-${this.props.business.price}`} aria-hidden="true"></i>
        <i className="fa fa-usd" id={`dollar-${this.props.business.price}`} aria-hidden="true"></i>
      </div>
    );
  }

  findAmPm(bizHour){
    if (bizHour >= 12 && bizHour < 24) {
      return "pm";
    } else {
      return "am";
    }
  }

  businessDelivery() {
    let delivers = "No";
    if (this.props.business.delivery === true) {
      delivers = "Yes";
    }

    return (
      <div> Delivery: {delivers}
      </div>
    );
  }

  businessHours() {
    const biz = this.props.business;
    return (
      <div className="hours-container">
        <h3 className="red-text">Hours</h3>
        <tbody>
          <tr><th scope="row">Mon</th>
            <td><span className="nowrap">{biz.mon_start_hr}:00  {this.findAmPm(biz.mon_start_hr)}</span> - <span>{biz.mon_end_hr - 12}:00 pm</span></td>
          </tr>
          <tr><th score="row">Tue</th>
            <td><span>{biz.tue_start_hr}:00  {this.findAmPm(biz.tue_start_hr)} - {biz.tue_end_hr - 12}:00 {this.findAmPm(biz.tue_end_hr)}</span></td>
          </tr>
          <tr><th score="row">Wed</th>
            <td><span>{biz.wed_start_hr}:00  {this.findAmPm(biz.wed_start_hr)} - {biz.wed_end_hr - 12}:00 {this.findAmPm(biz.wed_end_hr)}</span></td>
          </tr>
          <tr><th score="row">Thurs</th>
            <td><span>{biz.thur_start_hr}:00  {this.findAmPm(biz.thur_start_hr)} - {biz.thur_end_hr - 12}:00 {this.findAmPm(biz.thur_end_hr)}</span></td>
          </tr>
          <tr><th score="row">Fri</th>
            <td><span>{biz.fri_start_hr}:00  {this.findAmPm(biz.fir_start_hr)} - {biz.fri_end_hr - 12}:00 {this.findAmPm(biz.fri_end_hr)}</span></td>
          </tr>
          <tr><th score="row">Sat</th>
            <td><span>{biz.sat_start_hr}:00  {this.findAmPm(biz.sat_start_hr)} - {biz.sat_end_hr - 12}:00 {this.findAmPm(biz.sun_end_hr)}</span></td>
          </tr>
          <tr><th score="row">Sun</th>
            <td><span>{biz.sun_start_hr}:00  {this.findAmPm(biz.sun_start_hr)} - {biz.sun_end_hr - 12}:00 {this.findAmPm(biz.sun_end_hr)}</span></td>
          </tr>
      </tbody>
      </div>
    );
  }

  render() {

    const business = this.props.business;
    if (!business) {
      return null;
    }
    return (
      <main>
        <div className="main-content-container">
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
            <div className="biz-details-container">
              <ul className="biz-details">
                <li className="sum-island">
                <div className="takeout">{this.businessDelivery()}</div>
                <div>{this.businessPrice()}</div>
                </li>
                <li>{this.businessHours()}</li>
              </ul>
            </div>
            <div className="reviews-main">
              <ReviewIndexContainer />
            </div>
          </section>
        </div>
        <Footer />
      </main>
    );
  }
}

export default BusinessShow;
