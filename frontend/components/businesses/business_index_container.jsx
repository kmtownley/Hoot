import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = state => ({
  businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
