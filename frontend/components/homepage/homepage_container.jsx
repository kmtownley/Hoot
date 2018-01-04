import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Homepage from './homepage';

export const mapStateToProps = state => ({

});
//fill in tomorrow
export const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage));
