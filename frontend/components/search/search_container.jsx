import { connect } from 'react-redux';
import Search from './search';
import { fetchBusinesses } from '../../actions/business_actions';
import { updateBounds } from '../../actions/filter_actions';
import { logout, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {

  return {
    businesses: Object.values(state.entities.businesses),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  fetchBusinesses: (areaQuery, contentQuery) => dispatch(fetchBusinesses(areaQuery, contentQuery)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
