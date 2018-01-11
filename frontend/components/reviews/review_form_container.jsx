import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter, link } from 'react-router-dom';

import { createReview, fetchReview } from '../../actions/review_actions';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  
  let formType = 'new';
  let review = { user_rating: "", body: "", business_id: ownProps.match.params.businessId, user_id: state.session.currentUser.id};

  if (ownProps.match.path === '/businesses/:businessId/reviews/edit') {
    review = state.reviews[ownProps.match.params.reviewId];
    formType = 'edit';
  }
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    errors: state.errors.review,
    review,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/" ? createReview : createReview;
  return {
    fetchReview: id => dispatch(fetchReview(id)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    action: post => dispatch(action(post))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm));
