import React from 'react';
import { Link } from 'react-router-dom';

export default class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.businessId);
  }

  render() {
    const reviews = this.props.reviews.map(review => {
        return (
          <p> {review.body}</p>
        );
      }
    );
    return (
      <section className="review-content-container">
        {reviews}
      </section>
    )
  }
}
