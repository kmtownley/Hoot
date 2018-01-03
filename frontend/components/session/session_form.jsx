import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup"> Sign Up </Link>;
    } else {
      return <Link to="/login"> Login </Link>
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div class="signup-wrapper">
        <form onSubmit={this.handleSubmit} className="session_form_container">
          <h2 className="header-login-hoot">Login to Hoot</h2>
          <p className="subheader-text">New to Hoot?</p>
          <Link to={'/signup'} className="sign-up-link">Sign up</Link>
          <br/>
          <h3>{this.navLink()}</h3>
          {this.renderErrors()}
          <div className="login-form">
            <label>Username:
              <input className="login-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Password:
              <input className="login-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
    </div>
  )};
}

export default withRouter(SessionForm);
