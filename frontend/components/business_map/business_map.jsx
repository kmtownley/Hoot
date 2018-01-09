import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

// const getCoordsObj = latLng => ({
//   lat: latLng.latitude(),
//   lng: latLng.longitude()
// });


class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let mapOptions;

    if (this.props.path === "/businesses/:businessId") {
      mapOptions = {
        center : { lat: this.props.business.latitude, lng: this.props.business.longitude},
        zoom: 13
      };
    } else {
      mapOptions = {
        center: { lat: 40.7629471996736, lng: -73.97823811645509 },
          zoom: 13
        };
      }
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  addMapListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
}
  }

  componentDidUpdate() {
    // this.MarkerManager.updateMarkers(this.props.business);
  }

  componentWillReceiveProps(nextProps) {
    // this.MarkerManager.updateMarkers(newProps.businesses);
  }
  // componentDidUpdate() {
  //   if (this.props.singleBusiness) {
  //     const targetBusinessesKey = Object.keys(this.props.businesses)[0];
  //     const targetBusiness = this.props.businesses[targetBusinessKey];
  //     this.MarkerManager.updateMarkers([targetBusiness]); //grabs only that one business
  //   } else {
  //     this.MarkerManager.updateMarkers(this.props.businesses);
  //   }
  // }

  render() {

    return (
      <div className="map-box">
        <div id="map" ref={ map => this.mapNode = map }> </div>
      </div>
    )
  }
}

export default BusinessMap;
