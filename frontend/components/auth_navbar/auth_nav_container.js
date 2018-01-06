import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import AuthNavbar from './auth_navbar';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthNavbar));
