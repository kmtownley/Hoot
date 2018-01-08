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
    debuggr
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
    this.clearState();
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
   const text = this.props.formType === 'new' ? "Create Review" : "Update Review";
   return (
     <div>
       <h3>{this.props.business.biz_name}</h3>
       <h2 className="review-title">{text}</h2>
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
