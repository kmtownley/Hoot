import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentQuery: "",
      areaQuery: ""
    };
    this.autocomplete;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange.bind(this);
    this.startSearch = this.startSearch.bind(this);
  }

  clearInputs() {
    this.setState({
      contentQuery: "",
      areaQuery: ""
    });
  }

  handleChange(query){
    // return (e) => {
    //  this.setState({[query]: e.target.value});
    // };
    return (e) => {
      if (query === "areaQuery") {
        this.setState({[query]: e.target.value});
      } else {
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

  render() {
    return (
    <div className={this.switchContainerStyle()}>
      <form
        className="searchbar-form"
        onSubmit={this.handleSubmit}>
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
      </form>
    </div>
    );
  }

}

export default SearchBar;
