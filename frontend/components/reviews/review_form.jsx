import React from 'react';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;

  }

  clearState() {
    this.setState({
      body: "",
      userRating: "",
    });
  }

  componentDidMount() {

    this.props.fetchBusiness(this.props.match.params.businessId);
    if (this.props.match.params.reviewId) {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
  }


  componentWillReceiveProps(newProps) {
    if (this.props.formType != newProps.formType) {
      this.setState(newProps.review);
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});

    };

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  starReview() {
    return (
    <div>
      <label class="star-container">One
        <input
          type="radio"
          value="1"
        />
        <span class="checkmark"></span>
      </label>

      <label class="star-container">Two
        <input
          type="radio"
          value="2"
        />
        <span class="star"></span>
      </label>

      <label class="star-container">Three
        <input type="radio"></input>
        <span class="star"></span>
      </label>

      <label class="star-container">Four
        <input type="radio"></input>
        <span class="star"></span>
      </label>

      <label value={this.state.user_review} class="star-container">Five
        <input type="star"></input>
        <span class="star"></span>
      </label>
    </div>
    )
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
    };
   const text = this.props.formType === 'new' ? "Write a Review" : "Update Review";
   return (
     <div className="review-form-container">
       <h2 className="review-form-type">{text}</h2>
       <h3
         className = "review-form-title">{this.props.business.biz_name}
       </h3>

       <form
         className="review-input-container" onSubmit={this.handleSubmit}>
         <div className="review-star-container">
           <label>Select a rating to get started

           <input
             className="reivews-stars"
             type="text"
             placeholder="rating"
             value={this.state.userRating}
             onChange={this.update('user_rating')}
            />
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
         </form>

     </div>
   );
 }
}

export default ReviewForm;
