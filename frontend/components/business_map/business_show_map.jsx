import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class BusinessShowMap extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    let mapOptions;
    mapOptions = {
      center : { lat: this.props.business.latitude, lng: this.props.business.longitude},
      zoom: 16
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers([this.props.business]);
  }
  render() {

    return (
      <section className="search-map-container">
        <div className="map-box">
          <div id="map" ref={ map => this.mapNode = map }> </div>
        </div>
      </section>
    );
  }


}

export default BusinessShowMap;
