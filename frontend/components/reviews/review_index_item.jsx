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


  render() {
    const date = dateFormat(this.props.review.created_at, 'mm/dd/yyyy');
    return (
        <ul>
          <li>
            <div className="total-review-info">
                {this.userInfo()}
              <div>
                <div className="star-rating-container">
                  <div className="star-rating">
                    Rating: {this.props.review.user_rating}
                  </div>
                  <div className="review-date">
                    {date}
                  </div>
                </div>
              </div>
              <p> {this.props.review.body}</p>
            </div>
          </li>
          </ul>
    );
  }
}

export default ReviewIndexItem;
