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
    this.switchContainerStyle = this.switchContainerStyle.bind(this);
  }

  handleChange(query){
    return (e) => {
     this.setState({[query]: e.target.value});
    };
  }


  handleSubmit(e) {
    debugger
    const state1 = Object.assign({}, this.state);
    e.preventDefault();
    this.props.fetchBusinesses(state1).then( () => this.props.history.push(`/search?contentQuery=${this.state.contentQuery}&areaQuery=${this.state.areaQuery}`));

  }

  switchContainerStyle() {
    let className;
    if (this.props.location.pathname.length === 15 || this.props.location.pathname === '/search' ) {
      return (
        className = "nav-searchbar"
      );
    } else {
      return (
        className = "searchbar-wrapper"
      );
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
          className="search-text-area"
          type="text"
          placeholder="Near"
          value={this.state.areaQuery}
          onChange={this.handleChange("areaQuery")}
          />
        <button
          type="submit"
          value="submit">
          <i className="icon-search"></i>

        </button>
      </form>
    </div>
    );
  }

}

export default SearchBar;
