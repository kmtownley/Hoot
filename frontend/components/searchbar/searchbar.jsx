import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({query: e.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchBusinesses(this.state.query).then(() => this.props.history.push('/search'));
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
            />
        <input
          className="search-text-area"
          type="text"
          placeholder="Near"

          />
        <button
          type="submit"
          value={this.state.query}>
          <i class="icon-search"></i>

        </button>
      </form>
    </div>
    );
  }

}

export default SearchBar;
