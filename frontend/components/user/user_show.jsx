import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      savedMessage: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }
  handleSubmit(e) {
    debugger
    e.preventDefault();
    this.setState({
      savedMessage: "Changes saved"
    });
    const user = Object.assign({}, this.state);
    delete user["savedMessage"];
    this.props.updateUser(user);
  }
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }


  updateUserInfo() {
    const currentUser = this.props.currentUser;
    return (
      <form className="update-user-container">
        <span>{this.state.savedMessage}</span>
        <div className="user-image-container">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="user-input">
        <label>First Name
          <input
            className="update-name"
            value={this.state.first_name}
            placeholder={currentUser.first_name}
            onChange={this.update('first_name')}
            >
          </input>
        </label>
        <label>Last Name
          <input
            className="update-name"
            value={this.state.last_name}
            placeholder={currentUser.last_name}
            onChange={this.update('last_name')}
            >
          </input>
        </label>
        </div>
        <div className="review-form-button-container">
          <button
            className="submit-review-button"     onClick={this.handleSubmit} type="submit" value="Update User">Save Changes
          </button>
        </div>
      </form>
    );
  }

  render() {

    const currentUser = this.props.currentUser;
    return (
      <div className="user-show-container">
        <div className="account-settings-container">
          <div className="title-nav-content"
            >{currentUser.first_name}
            <br/>
            <span>Account Settings</span>
          </div>
          <div className="user-info-container">
            <div className="profile-text">Profile</div>
            <div>{this.updateUserInfo()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
