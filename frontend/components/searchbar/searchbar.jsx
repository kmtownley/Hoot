import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   contentQuery: "",
    //   areaQuery: ""
    // };
    this.state = ({areaQuery: "", contentQuery: "", price: null, delivery: false});
    this.autocomplete;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
    this.filterPrice = this.filterPrice.bind(this);
    this.renderFilter = this.renderFilter.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.deliveryFilter = this.deliveryFilter.bind(this);
    this.deliveryValue = false;

    // if (this.props.location.search !== "" ) {
    //   this.queries = this.props.location.search.split("&");
    //   this.content = this.queries[0].slice(this.queries[0].indexOf("=") + 1);
    //   this.area = this.queries[1].slice(this.queries[1].indexOf("=") + 1);
    // }
    this.getSearchInfo();

  }

  getSearchInfo() {
    if (this.props.location.search !== "" ) {
      this.queries = this.props.location.search.split("&");
      this.content = this.queries[0].slice(this.queries[0].indexOf("=") + 1);
      this.area = this.queries[1].slice(this.queries[1].indexOf("=") + 1);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.area !== newProps.area || this.conent !== newProps.content) {
      this.area = newProps.area && this.content === newProps.content;
    }
  }
  clearInputs() {
    this.setState({
      contentQuery: "",
      areaQuery: "",
      price: "",
      delivery: false
    });
  }

  handleChange(query){
    return (e) => {
      if (query === "areaQuery") {
        this.setState({[query]: e.target.value});
      }  else {
      this.setState({contentQuery: e.target.value, areaQuery: document.getElementById("autocomplete").value});
      }
    };
  }


  switchContainerStyle() {

    let className;
    if (this.props.location.pathname !== "/" || this.props.location.pathname === '/search' ) {
      return (
        className = "nav-searchbar"
      );
    } else {
      return (
        className = "searchbar-wrapper"
      );
    }
  }

  switchButtonStyle() {
    let buttonStyle;
    if (this.props.location.pathname.length !== 14 || this.props.location.pathname !== '/search' ) {
      return (
         buttonStyle = "home-search-button"
      );
    } else {
      return (
         buttonStyle = "search-button"
      );
    }
  }


  handleSubmit(e) {

    const state1 = Object.assign({}, this.state);
    e.preventDefault(); this.props.history.push(`/search?contentQuery=${this.state.contentQuery}&areaQuery=${this.state.areaQuery}`);
    this.clearInputs();

  }

  startSearch() {
   let locale = document.getElementById('autocomplete');
    this.autocomplete = new google.maps.places.Autocomplete(locale);
   }

   renderTitle() {
     debugger
     this.getSearchInfo();
    if (this.content && this.area) {
      return (
        <h3>Best {this.content} <span>in {this.area.toUpperCase()} </span></h3>
      );
    } else if (this.content) {
      return (
        <h3>Best {this.content}</h3>
      );
    } else if (this.area) {
        return (
          <h3>Best in {this.area.toUpperCase()}</h3>
        );
      } else {
        return (
          <h3>Best Options</h3>
        );
      }
   }

  toggleDelivery() {

    if (this.deliveryValue === false) {
      this.deliveryValue = "true";
    } else {
      this.deliveryValue = "false";
    }
  }

  deliveryFilter(e) {

    this.toggleDelivery(this.deliveryValue);
    this.setState({delivery: this.deliveryValue});
    this.props.updateFilter({delivery: this.deliveryValue});
  }

  filterPrice(e) {
    this.setState({price: e.target.value});
    this.props.updateFilter({price: e.target.value});
  }

  geolocate() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }

  renderFilter() {
    let priceInt;
    if (this.state.price !== undefined) {
      priceInt = parseInt(this.state.price);
    }

    return (
      <div className="filter-container">
        {this.renderTitle()}
        <ul className="filter-list-content">
          <ul className="filter-list-price">
              <label id={(priceInt >= 1) ? "green" : ""}>$
              <li className="filter-price">
                <input type="radio" value="1" name="dollar-signs" onChange={this.filterPrice} />
              </li>
              </label>
            <label id={priceInt >= 2 ? "green" : ""}>$$
              <li className="filter-price">
                <input type="radio" value="2" name="dollar-signs" onChange={this.filterPrice} />
              </li>
            </label>
            <label id={priceInt >= 3 ? "green" : ""}>$$$
            <li className="filter-price">
              <input type="radio" value="3" name="dollar-signs" onChange={this.filterPrice} />
            </li>
            </label>
            <label id={priceInt === 4 ? "green" : ""}>$$$$
              <li className="filter-price">
                <input type="radio" value="4" name="dollar-signs" onChange={this.filterPrice} />
              </li>
            </label>
          </ul>
            <label className="delivery-container">
              <i class="fa fa-truck" aria-hidden="true"></i>
              Order Delivery
              <input type="checkbox" value={this.deliveryValue} onChange={this.deliveryFilter} />
            </label>
        </ul>
      </div>
    );
  }

  render() {
    return (
    <div className={this.switchContainerStyle()}>
      <form
        className="searchbar-form"
        onSubmit={this.handleSubmit}>
          <div className="searchbar-container">
          <input
            className="search-type"
            type="text"
            placeholder="Find"
            value = {this.state.contentQuery}
            onChange={this.handleChange("contentQuery")}
          />
          <input
            id="autocomplete"
            autoComplete="on"
            onFocus={this.startSearch}
            className="search-text-area"
            type="text"
            placeholder="Near"
            value={this.state.areaQuery}
            onChange={this.handleChange("areaQuery")}
            />
        <button
          className={this.switchButtonStyle()}
          type="submit"
          value="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>
        {this.props.location.pathname === "/search" ? this.renderFilter() : ""}
      </form>
    </div>
    );
  }

}

export default SearchBar;
