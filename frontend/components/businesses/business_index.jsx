import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth_navbarContainer from '../auth_navbar/auth_nav_container';
import BusinessIndexItem from './business_index_item';
import BusinessMap from '../business_map/business_map';
import SearchContainer from '../search/search_container';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  bizListStyle() {
    let className;
    if (this.props.pathname === '/businesses/:businessId') {
      return (
        className = "business-index-list"
      );
    } else {
      return (
        className = "biz-hot-list"
      );
    }
  }

  render() {
    const businesses = this.props.businesses;
    return (
      <main className="business-index-container">
        <ul>
          {
            businesses.map((business, idx) => (
              <ul key={`${idx}`}>
                <BusinessIndexItem
                  className="business-index-item"
                  key={business.id}
                  business={business}
                  num ={idx + 1}
                  pathname={this.props.location.pathname}
                  fetchReviews={this.props.fetchReviews}
                  reviews={this.props.reviews}

                />
              </ul>
            ))
          }
        </ul>
        <section className="business-index-map">
          <BusinessMap
            businesses={businesses}
            singleBusiness={false}
            updateBounds={this.props.updateBounds}

            />
        </section>
      </main>
    );
  }
}

export default withRouter(BusinessIndex);
