import { connect } from 'react-redux';
import Search from './search';
import { fetchBusinesses, searchBusinesses } from '../../actions/business_actions';
import { updateBounds } from '../../actions/filter_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    businesses: Object.values(state.entities.businesses),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
  updateBounds: (filter, value) => dispatch(updateBounds(filter, value)),
  fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters)),
  searchBusinesses: query => dispatch(searchBusinesses(query)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
