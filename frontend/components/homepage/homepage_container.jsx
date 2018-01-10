import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Homepage from './homepage';
import { fetchBusinesses } from '../../actions/business_actions';

export const mapStateToProps = state => {

  return {
  businesses: Object.values(state.entities.businesses)
};
};
//fill in tomorrow
export const mapDispatchToProps = dispatch => ({
  fetchBusinesses: (query) => dispatch(fetchBusinesses(query))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage));
