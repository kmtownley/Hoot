import React from 'react';
import { Link } from 'react-router-dom';
import auth_navbarContainer from '../auth_navbar/auth_nav_container';
import BusinessIndexItem from './business_index_item';
import HomepageContainer from '../homepage/homepage_container';
import BusinessMap from '../business_map/business_map';



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
      <main className="business-index-container">
        <HomepageContainer />
        <section
          className="biz-index-title">
          Hot & Awesome Businesses
        </section>

        <ul className="business-index-list">
          {
            businesses.map((business, idx) => (
              <ul key={`${idx}`}>
                <BusinessIndexItem
                  className="business-index-item"
                  key={business.id}
                  business={business}
                />
              </ul>
            ))
          }
        </ul>
        <section className="business-index-map">
          <BusinessMap
            businesses={businesses}
            />
        </section>
      </main>
    )
  }
}

export default BusinessIndex;
