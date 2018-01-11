import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: props.currentUser.first_name,
      last_name: props.currentUser.last_name,
      savedMessage: "",
      imageFile: null,
      user_img: props.currentUser.user_img
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }


  componentWillReceiveProps(nextProps) {

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData ();
    formData.append("user[user_img]", this.state.imageFile);
    formData.append("user[firstName]", this.state.first_name);
    formData.append("user[lastName]", this.state.last_name);
    this.setState({
      savedMessage: "Changes saved"
    });
    // const user = Object.assign({}, this.state);
    // delete user["savedMessage"];
    this.props.updateUser(formData);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateFile(e) {
    let file;
    // if (!this.state.user_img) {
    //   file = <i className="fa fa-user" aria-hidden="true"></i>;
    // } else {
    file = e.currentTarget.files[0];
    // }
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, user_img: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  updateUserInfo() {

    const currentUser = this.props.currentUser;
    return (
      <form className="update-user-container">
        <span>{this.state.savedMessage}</span>

        <div className="user-image-container">
          <input
            type="file"
            title=" "
            onChange={this.updateFile}
            />
          <img
            className="user-profile-img" src={this.state.user_img} />
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
          <img src={this.state.imageUrl}></img>
          <div className="title-nav-content"
            >{currentUser.first_name}
            <br/>
            <span>Account Settings</span>
          </div>
          <div className="user-profile-container">
            <div className="profile-text">Profile</div>
            <div>{this.updateUserInfo()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
