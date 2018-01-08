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
    debugger
    this.props.fetchBusiness(this.props.match.params.businessId);
    if (this.props.match.params.ReviewId) {
      this.props.fetchReview(this.props.match.params.reviewId);
    }
  }


  componentWillReceiveProps(newProps) {
    debugger
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

  render () {
    debugger
    if (!this.props.business) {
      return (
        <div className="Loading">
          <h2>Loading...</h2>
          <i className="fa fa-spinner"></i>
        </div>
      );
    };
   const text = this.props.formType === 'new' ? "Create Review" : "Update Review";
   return (
     <div className="review-form-conatiner">
       <h3 className = "review-form-title">{this.props.business.biz_name}</h3>
       <h2 className="review-form-type">{text}</h2>
       <form onSubmit={this.handleSubmit}>
         <label>Select a rating to get started
           <input
             type="text"
             value={this.state.user_rating}
             onChange={this.update('userRating')} />
         </label>

         <label>
           <textarea className="review-body"
             value={this.state.body}
             placeholder="Your review will help others find great local businesses. Please don't review this business if you have received a freebie or are in anyway connected to the establishment :)"
             onChange={this.update('body')} />
         </label>

         <input type="submit" value={text} />
       </form>
     </div>
   );
 }
}

export default ReviewForm;
