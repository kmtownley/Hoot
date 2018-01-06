import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <ul>
        <li>this.props.review.user_rating</li>
        <li>this.props.review.body</li>
      </ul>
    )
  }
}

export default ReviewIndexItem;
