import React from 'react';
import BusinessIndexContainer from '../businesses/business_index_container';
import BusinessMap from '../business_map/business_map';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    const areaQuery = this.props.location.search.slice(this.props.location.search.indexOf("areaQuery" + 10));

    const contentQuery = this.props.location.search.slice(this.props.location.search.indexOf("contentQuery=" + 13));

    // if (this.props.location.search !== )
    this.props.fetchBusinesses(contentQuery, areaQuery);
  }

  // componentWillReceiveProps(nextProps) {
  //
  //   const areaQuery = nextProps.location.search.slice(this.props.location.search.indexOf("areaQuery" + 10));
  //   const contentQuery = nextProps.location.search.slice(this.props.location.search.indexOf("contentQuery=" + 13));
  //
  //   if (this.props.location.search !== nextProps.props.location.search) {
  //     this.props.fetchBusinesses(contentQuery, areaQuery);
  //   }
  // }

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
  );
  }
}

export default Search;
