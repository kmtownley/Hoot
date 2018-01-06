import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchReviews, fetchReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: Object.values(state.reviews),
    business: ownProps.business,
    author: state.session.currentUser.first_name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex));
