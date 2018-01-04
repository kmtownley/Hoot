import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType;
  if (ownProps.location.pathname === '/login') {
    formType = '/login';
  } else {
    formType = '/signup';
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/login') {
    return {
      processForm: user => dispatch(login(user)),
      login: user => dispatch(login(user))
    };
  } else {
    return {
      processForm: user => dispatch(signup(user)),
      login: user => dispatch(login(user))
    };
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));