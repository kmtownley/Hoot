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
    this.updateBounds = this.updateBounds.bind(this);
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
    this.map.addListener("idle", this.updateBounds);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  componentsWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.businesses);
  }

  updateBounds() {
    debugger
    let latLng = this.map.getBounds();

    let ne = latLng.getNorthEast();
    let sw = latLng.getSouthWest();

    this.props.updateBounds({
      north: ne.lat(),
      east: ne.lng(),
      south: sw.lat(),
      west: sw.lng()
    });
  }

  componentDidUpdate() {
    // if (this.props.singleBusiness) {
    //   const targetBusinessKey = Object.key(this.props.businesses[0]);
    //   const targetBusiness = this.props.businesses[targetBusinessKey];
    //   this.MarkerManager.updateMarkers([targetBusiness]);
    // } else {
    //   this.MarkerManager.updateMarkers(this.props.businesses);
    // }
  }

  // handleClick(coords) {
  //   this.props.history.push({
  //     pathname: 'businesses/new',
  //     search: `lat=${coords.lat}&lng=${coords.lng}`
  //   });
  // }



  render() {

    return (
      <div className="map-box">
        <div id="map" ref={ map => this.mapNode = map }> </div>
      </div>
    );
  }
}

export default withRouter(BusinessMap);
