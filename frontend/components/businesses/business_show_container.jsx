import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId],
  businesses: state.entities.businesses
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
