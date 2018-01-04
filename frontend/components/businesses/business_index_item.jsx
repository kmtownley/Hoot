import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const { biz_name, address, description, image_url } = this.props.business;

    return (
      <div
        className="business-index-item"
        onClick={this.handleClick}>
        <section className="business-index-categories">
          <span className="biz-index-name">{biz_name}</span>
          <span className="biz-index-address">{address}</span>
          <span className="biz-index-description">{description}</span>
        </section>
        <img src={image_url} />
      </div>
    )
  }

}

export default BusinessIndexItem;
