import React from 'react';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
    this.starText = this.starText.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }

  clearState() {
    this.setState({
      body: "",
      userRating: "",
    });
  }

  componentDidMount() {
    debugger
    this.props.fetchBusiness(this.props.match.params.businessId);
    if (this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
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

    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push(`/businesses/${this.props.business.id}`));
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
      <div className="review-stars-wrapper">
        <input
          value={this.state.userRating}
          onChange={this.update('user_rating')}
          type="radio"
          name="userRating"
          value="1"
        />
        <input
          value={this.state.userRating}
          onChange={this.update('user_rating')}
          type="radio"
          name="userRating"
          value="2"
        />
        <input
          value={this.state.userRating}
          onChange={this.update('user_rating')}
          type="radio"
          name="userRating"
          value="3"
        />
        <input
          value={this.state.userRating}
          onChange={this.update('user_rating')}
          type="radio"
          name="userRating"
          value="4"
        />
        <input
          value={this.state.userRating}
          onChange={this.update('user_rating')}
          type="radio"
          name="userRating"
          value="5"
        />
      </div>
    );
  }

  updateRadioButton(value) {
    this.setState({ radio: value });
  }

  render () {
    if (!this.props.business) {
      return (
        <div className="loading-container">
          <h2 className="loading">Loading...
          <i className="fa fa-spinner"></i>
          </h2>
        </div>
      );
    }
   const text = this.props.formType === 'new' ? "Write a Review" : "Update Review";
   return (
     <div className="review-main">
       <h2 className="review-form-type">{text}</h2>
       <h3
         className = "review-form-title">{this.props.business.biz_name}
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

export default ReviewForm;
