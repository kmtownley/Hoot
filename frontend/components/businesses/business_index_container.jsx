import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {

  return {
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  fetchBusinesses: () => dispatch(fetchBusinesses())
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(BusinessIndex));
