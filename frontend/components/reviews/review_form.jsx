import React from 'react';
import { Link } from 'react-router-dom';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {body: this.props.review.body, user_rating: this.props.review.user_rating, business_id: this.props.business.id, user_id: this.props.review.user_id};
    this.starText = this.starText.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
  }

  clearState() {
    this.setState({
      body: "",
      userRating: "",
    });
  }

  componentDidMount() {
    if (this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
    this.props.fetchBusiness(this.props.match.params.businessId);
  }


  componentWillReceiveProps(newProps) {
    if (this.props.formType != newProps.formType) {
      this.setState(newProps.review);
      this.props.clearErrors();
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    return(
      <ul className="review-errors-container">
        {this.props.errors.map((error, idx) => (
          <li className="review-errors" key={`${idx}`}>
            <img src={window.staticImages.errorImage} />
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    if (this.props.location.pathname.includes("edit")) {
      this.props.action({id: this.props.review.id,
      user_rating: this.state.user_rating,
      body: this.state.body,
      user_id: this.props.review.user_id,
      business_id: this.props.business.id});
    } else {
      this.props.action(this.state);
    }
    this.props.history.push(`/businesses/${this.props.business.id}`);
  }


  starText(value) {
    let text;
    switch (value) {
    case "1":
      text = "Eek! Me thinks not.";
      return text;
    case "2":
      text = "Meh... I have experienced better.";
      return text;
    case "3":
      text = "A-OK.";
      return text;
    case "4":
      text = "Yay! I am a fan!";
      return text;
    case "5":
      text = "Woohoo. As good as it gets!";
      return text;
    default:
      return text = "Select a rating to get started";
    }
  }


  starReview() {
    return (
      <div>
        <div className="stars">
        	<input type="radio"
            onChange={this.update('user_rating')}
            name="userRating"
            value="5"
            id="user-rating-5"
            hidden />
          <label for="user-rating-5">
        		<i className="fa fa-star"></i>
         		<i className="fa fa-star-o"></i>
        	</label>
        	<input type="radio"
            onChange={this.update('user_rating')}
            name="userRating"
            value="4"
            id="user-rating-4"
            hidden />
        	<label for="user-rating-4">
             <i className="fa fa-star"></i>
             <i className="fa fa-star-o"></i>
          </label>
        	<input
            type="radio"
            onChange={this.update('user_rating')}
            name="userRating"
            value="3"
             id="user-rating-3"
             hidden />
           <label for="user-rating-3">
             <i className="fa fa-star"></i>
             <i className="fa fa-star-o"></i>
          </label>
        	<input
            type="radio"
            onChange={this.update('user_rating')}
            name="userRating"
            value="2"
            id="user-rating-2"
            hidden />
          <label for="user-rating-2">
          	 <i className="fa fa-star"></i>
             <i className="fa fa-star-o"></i>
          </label>
        	<input
            type="radio"
            onChange={this.update('user_rating')}
            name="userRating"
            value="1"
            id="user-rating-1"
            hidden />
          <label for="user-rating-1">
          	 <i className="fa fa-star"></i>
             <i className="fa fa-star-o"></i>
          </label>
        </div>
    </div>
    );
  }

  updateRadioButton(value) {
    this.setState({ radio: value });
  }

  render () {
    const business = this.props.business;
    const review = this.props.review;
    if (!business || !review) {
        return (
          <div className="loading-container">
            <h2 className="loading">Loading...
            </h2>
          </div>
        );
      } else {
     const text = this.props.formType === 'new' ? "Write a Review" : "Update Review";
     return (
       <div className="review-main">
         <h2 className="review-form-type">{text}</h2>
         <h3
           className = "review-form-title">
           <Link to={`/businesses/${business.id}`}>
             {business.biz_name}</Link>
         </h3>
         <ul>
           <li>{this.renderErrors()}</li>
         </ul>
         <form
           className="review-form-container" onSubmit={this.handleSubmit}>
           <div className="review-input-container">
             <div className="review-star-container">
                 {this.starReview()}
                 <label>
                   {this.starText(this.state.user_rating)}
                 </label>
             </div>

             <label>
               <textarea className="review-body"
                 value={this.state.body}
                 placeholder="Your review will help others find great local businesses. Please don't review this business if you have received a freebie or are in anyway connected to the establishment :)"
                 onChange={this.update('body')} />
             </label>

             <div className="review-form-button-container">
               <button
                 className="submit-review-button"
                 type="submit"
                 value="submit">{text}
               </button>
              </div>
            </div>
           </form>

       </div>
     );
   }
 }
}

export default ReviewForm;
