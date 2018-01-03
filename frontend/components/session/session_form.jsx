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
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Login</Link>
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
      <div>
        <form onSubmit={this.handleSubmit} className="login-box">
          <h2>Welcome to Hoot</h2>
          <br/>
          <h3>Please
            <Link to={`/signup`}>Sign Up</Link>
             or {this.navLink()}</h3>
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
            <input type="submit" value="Submit" />
          </div>
        </form>
    </div>
  )};
}

export default withRouter(SessionForm);
