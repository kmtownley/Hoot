import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  userInfo() {
    return (
      <div className="user-info-container">
        <div className="user-info-sidebar-container">
          <div className="review-profile-pic-container">
            <img
              className="user-review-profile-img"
              src={this.props.review.user_img}
            />
          </div>
          <div className="user-sidebar-content">
            <div
              className="review-user-name">{this.props.review.first_name}
            </div>
            <br/>
            <span>{this.props.review.city}</span>&nbsp;
            <span>{this.props.review.state}</span>
          </div>
        </div>
      </div>
    );

  }

  renderNoReviews() {
    if (!this.props.review) {
      return (
        <div className="no-review-error-message">
          Be the first to review this business!
        </div>
      );
    }
  }

  renderUpdate() {
    if (!this.props.currentUser) {
      return null;
    } else if (this.props.currentUser.id === this.props.review.user_id) {
      return (
        <Link to={`/businesses/${this.props.businessId}/reviews/${this.props.review.id}/edit`}>
          <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
        </Link>
      );
    } else {
      return null;
    }
  }




  render() {
    const date = dateFormat(this.props.review.created_at, 'mm/dd/yyyy');
    return (
      <ul>
        {this.renderNoReviews()}
        <li>
          <div className="total-review-info">
              {this.userInfo()}
            <div>
              <div className="star-rating-container">
                <div
                   className={`star-rating-${this.props.review.user_rating}-sm`}>
                </div>
                <div className="review-date">
                  {date}
                </div>
              </div>
            </div>
            <p> {this.props.review.body}</p>
          </div>
          <div class="edit-button">
            {this.renderUpdate()}
          </div>
        </li>
      </ul>
    );
  }
}

export default ReviewIndexItem;
