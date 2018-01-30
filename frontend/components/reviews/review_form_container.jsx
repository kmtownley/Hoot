import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/review_actions';
import { withRouter, Link } from 'react-router-dom';

import { createReview, fetchReview, updateReview } from '../../actions/review_actions';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import ReviewForm from './review_form';


const mapStateToProps = (state, ownProps) => {

  let formType = 'new';
  let review = { user_rating: "", body: "", business_id: ownProps.match.params.businessId, user_id: state.session.currentUser.id};
  if (ownProps.match.path === '/businesses/:businessId/reviews/:reviewId/edit/') {
    review = state.entities.reviews[ownProps.match.params.reviewId];
    // formType = 'edit';
    formType = "edit";
     // review = state.entities.reviews[ownProps.match.params.reviewId]
   }
   debugger
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    errors: state.errors.review,
    review,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/businesses/:businessId/reviews/new" ? createReview : updateReview;

  return {
    fetchReview: id => dispatch(fetchReview(id)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    action: post => dispatch(action(post)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
