import React from 'react';
import BusinessIndexContainer from '../businesses/business_index_container';
import BusinessMap from '../business_map/business_map';
import Footer from '../footer/footer';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({areaQuery: "", contentQuery: "", price: [1,2,3,4], delivery: false});
    this.businesses;

  }

  componentDidMount() {

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

  filterBusinesses() {

      this.businesses = this.props.businesses;
      if (this.props.priceFilter !== undefined) {
        this.businesses = this.props.businesses.filter(biz =>  this.props.priceFilter.includes(biz.price));

      }
      if (this.props.deliveryFilter != undefined) {

       this.businesses = this.businesses.filter(biz => (biz.delivery.toString() === this.props.deliveryFilter || biz.delivery === true));
     }
  }


  render() {
    console.log(this.businesses)
    // const businesses = this.props.businesses;
    this.filterBusinesses();
    const businesses = this.businesses;
    if (businesses.length === 0 ) {
      return (
        <div className="no-biz-container">
        <h1 className="no-biz-result">Sorry, no businesses match your specifications. Try broadening your search criteria. </h1>
        <img src={window.staticImages.hootGif} />
        <Footer />
        </div>
      );
    }
    return (
      <main>
        <div className="filter-box"></div>
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
      <Footer />
    </main>
  );
  }
}

export default Search;
