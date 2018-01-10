import React from 'react';
import BusinessIndex from '../businesses/business_index';
import BusinessMap from '../business_map/business_map';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const businesses = this.props.businesses;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input ref="search" type="search"  placeholder="Search..." />
        <button type="submit">Go</button>

        </form>
        <div className="search-businesses-container">
          <div className="right-half">
            <BusinessMap
              businesses={businesses}
              singleBusiness={false}
              updateBounds={this.props.updateBounds}
            />
          </div>
          <div className="left-half">
            <BusinessIndex
              businesses={businesses}
          />
          </div>
      </div>
    </div>
    )
  }
};

export default Search;
