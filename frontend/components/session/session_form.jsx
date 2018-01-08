import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.nameInputs = this.nameInputs.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
      this.clearInputs();
    }
  }

  componentWillUnmount() {
  }

  clearInputs() {
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    });
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
      this.setState({[field]: e.target.value})
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
      this.setState({email: "guest@hoot.com", password: "password", first_name: "guest", last_name: "guest"}, () => {
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

  nameInputs() {
    return (
      <ul className="name-container">
        <li className='inputs'>
          <input
            className="first-name"
            type="text"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.update('first_name')}
          />
        </li>
        <li className='inputs'>
          <input
            className="last-name"
            type="text"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.update('last_name')}
          />
        </li>
      </ul>
    )
  }



  render() {
    const text = this.props.formType === '/signup' ? "Sign Up" : "Login";
    return (
      <div className="content-container">
        <main className="main-content">
          <div className="signup-wrapper">
            <form onSubmit={this.handleSubmit} className="session_form_container">
              <h2 className="header-login-text">{text} to Hoot </h2>
              <p className="subheader-text">New to Hoot?
              <Link to={'/signup'} className="signup-link"> Sign up</Link>
              </p>
              <br/>
              <ul>
                <li>{this.renderErrors()}</li>
              </ul>
              <div className="login-form">
                <div>
                  {this.props.formType === "/signup" ? this.nameInputs() : "" }
                </div>
                <br/>
                <label>
                  <input
                    className="login-input"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                </label>
                <br/>
                <label>
                  <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
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
