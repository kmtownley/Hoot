import { connect } from 'react-redux';
import Search from './search';
import { fetchBusinesses } from '../../actions/business_actions';
import { updateFilter, clearFilter } from '../../actions/filter_actions';
import { logout, clearErrors } from '../../actions/session_actions';
import { fetchReviews} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  let priceFilter = 5;
  let deliveryFilter;
  if (state.entities.filters !== null) {
    priceFilter = state.entities.filters.price;
    deliveryFilter = state.entities.filters.delivery;
  }
  return {
    businesses: Object.values(state.entities.businesses),
    currentUser: state.session.currentUser,
    priceFilter,
    deliveryFilter

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
  updateFilter: (bounds) => dispatch(updateFilter(bounds)),
  clearFilter: () => dispatch(clearFilter()),
  fetchReviews: businessId => dispatch(fetchReviews(businessId)),
  fetchBusinesses: (areaQuery, contentQuery) => dispatch(fetchBusinesses(areaQuery, contentQuery)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
