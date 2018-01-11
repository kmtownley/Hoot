import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (state, ownProps) => {
  debugger
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow)
