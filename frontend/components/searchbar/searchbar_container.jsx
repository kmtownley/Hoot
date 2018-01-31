import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { withRouter } from 'react-router-dom';
import { fetchBusinesses } from '../../actions/business_actions';
import { updateFilter } from '../../actions/filter_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {

  return {
    businesses: Object.values(state.entities.businesses),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  
  return {
  updateFilter: (bounds) => dispatch(updateFilter(bounds)),
  fetchBusinesses: (areaQuery, contentQuery) => dispatch(fetchBusinesses(areaQuery, contentQuery)),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
