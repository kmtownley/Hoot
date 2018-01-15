import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Homepage from './homepage';
import { fetchBusinesses } from '../../actions/business_actions';

export const mapStateToProps = state => {

  return {
  businesses: Object.values(state.entities.businesses)
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchBusinesses: (queries) => dispatch(fetchBusinesses(queries))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage));
