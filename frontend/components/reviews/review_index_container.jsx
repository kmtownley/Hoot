import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchReviews, fetchReview, deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
    business: state.entities.businesses[ownProps.match.params.businessId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
