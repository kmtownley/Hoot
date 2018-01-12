import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentQuery: "",
      areaQuery: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }

  clearInputs() {
    this.setState({
      contentQuery: "",
      areaQuery: ""
    });
  }

  handleChange(query){
    return (e) => {
     this.setState({[query]: e.target.value});
    };
  }



  switchContainerStyle() {
    debugger
    let className;
    if (this.props.location.pathname.length === 13 || this.props.location.pathname === '/search' ) {
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
    e.preventDefault();
    this.props.fetchBusinesses(state1).then(() => this.props.history.push(`/search?contentQuery=${this.state.contentQuery}&areaQuery${this.state.areaQuery}`));
    this.clearInputs();

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
