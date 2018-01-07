import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

import { createReview, fetchReview } from '../../actions/review_actions';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  debugger
  let formType = 'new';
  let review = { user_rating: "", body: "", business_id: ownProps.match.params.businessId, user_id: state.session.currentUser};

  // if (ownProps.match.path === '/businesses/:businessId/reviews/edit') {
  //   review = state.reviews[ownProps.match.params.reviewId];
  //   formType = 'edit';
  // }
  return { review, formType};
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
