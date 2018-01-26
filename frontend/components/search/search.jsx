import React from 'react';
import BusinessIndexContainer from '../businesses/business_index_container';
import BusinessMap from '../business_map/business_map';


class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    debugger
    const queries = this.props.location.search.split("&");
    const contentQuery = queries[0].slice(queries[0].indexOf("=") + 1);
    const areaQuery = queries[1].slice(queries[1].indexOf("=") + 1);
    this.props.fetchBusinesses(areaQuery, contentQuery);
  }

  componentWillReceiveProps(nextProps) {
    const queries = nextProps.location.search.split("&");
    const contentQuery = queries[0].slice(queries[0].indexOf("=") + 1);
    const areaQuery = queries[1].slice(queries[1].indexOf("=") + 1);
    if (this.props.location.search !== nextProps.location.search ) {
      this.props.fetchBusinesses(areaQuery, contentQuery);
    }
  }

  findBusinesses() {
    let businesses;
    if (this.props.businesses.length === 0 ) {
      return (
        <div className="no-biz-message">Sorry, no businesses meet those criteria :(
        </div>
      );
    }
  }

  startSearch() {
     let input = document.getElementById('autocomplete');
    this.autocomplete = new google.maps.places.Autocomplete(input);
   }



  render() {
    debugger
    const businesses = this.props.businesses;
    return (
      <div>
        <div className="search-businesses-container">
          {this.findBusinesses()}
          <div className="main-search-container">
            <BusinessIndexContainer
              businesses={businesses}
              pathname={this.props.location.pathname}
              fetchReviews={this.props.fetchReviews}
              updateBounds={this.props.updateBounds}
            />
          </div>
      </div>
    </div>
  );
  }
}

export default Search;
