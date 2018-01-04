import React from 'react';

import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

export default class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
}
