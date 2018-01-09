import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = state => {
  debugger
  return {
  businesses: Object.values(state.entities.businesses)
  };
};

const mapDispatchToProps = dispatch => {
  debugger
  return {
  fetchBusinesses: () => dispatch(fetchBusinesses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
