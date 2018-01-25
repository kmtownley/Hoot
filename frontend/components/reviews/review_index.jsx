import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

export default class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.businessId);
  }

  userInfo() {
    return (
      <section>
        this.currentUser.user_name
      </section>
    );
  }

  render() {
    debugger
    const reviews = this.props.reviews.map(review => {
      return (
        <div className="review-wrapper">
          <ReviewIndexItem
            key={review.id}
            businessId={this.props.business.id}
            review={review}
            currentUser={this.props.currentUser}
            deleteReview={this.props.deleteReview}
            />
        </div>
      );
    });
    if (reviews.length === 0) {
      return (
        <div>Loading...
           <i className="fa fa-spinner fa-pulse"></i>
        </div>
      );
    }


    return (
      <section className="reviews">
        <div className="review-index-container">
          <h2>Recommended Reviews
            <div className="review-index">
              for {this.props.business.biz_name}
            </div>
          </h2>
        </div>
        <div className="single-reviews">
          {reviews}
        </div>
    </section>
    );
  }
}
