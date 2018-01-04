import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import NavbarContainer from '../navbar/navbar_container';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handldDemo = this.handleDemo.bind(this);
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
          <li className="session-errors" key={`${idx}`}>
            <img src={window.staticImages.errorImage} />
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemo() {
    return (e) => {
      e.preventDefault();
      this.setState({username: "guest", password: "password"}, () => {
        const user = Object.assign({}, this.state);
        this.props.login(user);
      });
    };
  }

  notMemberMessage() {
    if (this.props.formType === '/login') {
      return (
        <div className="alternate-login-signup"> New to Hoot?
          <Link to={'/signup'} className="not-member-link"> Sign Up</Link>
        </div>
      )
    } else {
      return (
        <div className="alternate-login-signup"> Already on Hoot?
          <Link to={'/login'} className="not-member-link"> Login </Link>
        </div>
      )
    }
  }



  render() {
    const text = this.props.formType === '/signup' ? "Sign Up" : "Login";
    return (
      <div className="content-container">
        <header className="session-header">
          <Link to="/">
            <img src={window.staticImages.headerImage} />
          </Link>
        </header>
          <main className="main-content">
          <div className="signup-wrapper">
            <form onSubmit={this.handleSubmit} className="session_form_container">
              <h2 className="header-login-hoot">{text} to Hoot </h2>
              <p className="subheader-text">New to Hoot?
              <Link to={'/signup'} className="signup-link"> Sign up</Link>
              </p>
              <br/>
              <ul>
                <li>{this.renderErrors()}</li>
              </ul>
              <div className="login-form">
                <label>
                  <input
                    className="login-input"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.update('username')}
                  />
                </label>
                <br/>
                <label>
                  <input
                    className="login-input"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                  />
                </label>
                <br/>
                  <input
                    className="submit-button"
                    type="submit"
                    value={text}
                  />
                  <button
                    className="demo-login-button"      onClick={this.handleDemo()} type="submit" value="Guest Login">Guest Login
                  </button>
                <section className="small-closing">
                  {this.notMemberMessage()}
                </section>
              </div>
            </form>
        </div>
        <section className="owl-pic">
          <img src={window.staticImages.owlImage} />
        </section>
      </main>
    </div>
  )};
}

export default withRouter(SessionForm);
