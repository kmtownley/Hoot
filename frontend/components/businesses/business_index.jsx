import React from 'react';

import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import BusinessIndexItem from './business_index_item';


class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const businesses = this.props.businesses;

    return (
      <main>
        <ul>
          {
            businesses.map(business => (
              <BusinessIndexItem
                key={business.id}
                business={business}
              />
            ))
          }
        </ul>

      </main>
    )
  }
}

export default BusinessIndex;
