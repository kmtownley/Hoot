import React from 'react';
import BusinessIndex from '../businesses/business_index';
import BusinessMap from '../business_map/business_map';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="search-businesses-container">
        <div className="right-half">
          <BusinessMap
            businesses={businesses}
          />
        </div>
        <div className="left-half">
          <BusinessIndex
            businesses={businesses}
        />
        </div>
    </div>
    )
  }
};

export default Search;
