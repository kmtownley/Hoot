import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager';

// const getCoordsObj = latLng => ({
//   lat: latLng.latitude(),
//   lng: latLng.longitude()
// });


class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7629471996736, lng: -73.97823811645509 },
        zoom: 13
      };
      // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div className="map-box">
        <div id="map" ref={ map => this.mapNode = map }> </div>
      </div>
    )
  }
}

export default BusinessMap;
