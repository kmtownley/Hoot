import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.business;
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchBusiness(nextProps.match.params.businessId);
  }

  render() {
    const business = this.props.business;
    if (!business) {
      return <div>Loading</div>
    }
    return (
      <div>
        <img src={image_url} />
        <ul>
          <li>{business.bizName}</li>
          <li>{business.address}</li>
          <li>{business.city}</li>
          <li>{business.state}</li>
        </ul>
      </div>
    )
  }
}

export default BusinessShow;
