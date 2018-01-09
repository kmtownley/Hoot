import React from 'react';
import BusinessIndex from '../businesses/business_index';
import BusinessMap from '../business_map/business_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const businesses = this.props.businesses;
    debugger
    return (
      <div className="search-businesses-container">
        <div className="right-half">
          <BusinessMap
            businesses={businesses}
            singleBusiness={false}
            updateBounds={updateBounds}
          />
        </div>
        <div className="left-half">
          <BusinessIndex
            businesses={businesses}
            fe
        />
        </div>
    </div>
    )
  }
};

export default Search;
