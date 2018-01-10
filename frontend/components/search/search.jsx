import React from 'react';
import BusinessIndexContainer from '../businesses/business_index_container';
import BusinessMap from '../business_map/business_map';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {

  }

  render() {

    const businesses = this.props.businesses;

    return (
      <div>
        <div className="search-businesses-container">
          <div className="main-search-container">
            <BusinessIndexContainer
              businesses={businesses}
              pathname={this.props.location.pathname}
          />
          </div>
      </div>
    </div>
    )
  }
};

export default Search;
