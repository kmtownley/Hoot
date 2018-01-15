import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => {

  return {
  businesses: state.entities.businesses,
  business: state.entities.businesses[ownProps.match.params.businessId],
  businessId: parseInt(ownProps.match.params.benchId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);
