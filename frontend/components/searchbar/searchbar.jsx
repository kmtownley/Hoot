import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <input type="search" placeholder="Find a business" value={this.state.query}/>
        <input type="submit" value="search"
          onChange={this.handleChange} />
      </form>
    </div>
    )
  }

}

export default SearchBar;
