import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = this.props.currentUser;
  }
  render() {
    debugger
    const currentUser = this.props.currentUser;
    return (
      <div className="user-info">

        {currentUser.first_name}
      </div>
    );
  }
}

export default UserShow;
