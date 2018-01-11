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

  handleChange(query){
    return (e) => {
     this.setState({[query]: e.target.value});
    };
  }


  handleSubmit(e) {
    const state1 = Object.assign({}, this.state);
    e.preventDefault();
    this.props.history.push(`/search?contentQuery=${this.state.contentQuery}&areaQuery=${this.state.areaQuery}`);

  }
  render() {

    return (
    <div className="searchbar-wrapper">
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
