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
    if (this.props.location.pathname !== "/search") {
      mapOptions = {
        center : { lat: this.props.business.latitude, lng: this.props.business.longitude},
        zoom: 16
      };
    } else {
      mapOptions = {
        center: { lat: 40.7629471996736, lng: -73.97823811645509 },
          zoom: 12
        };
      }
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.map.addListener("idle", this.updateBounds);
    this.MarkerManager.updateMarkers(this.props.businesses);
    // this.MarkerManager.markers;
  }

  componentsWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.businesses);
  }

  updateBounds() {

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

  renderBizShowContainer() {
    let containerStyle;
    if (this.props.location.pathname !== '/search') {
      return (
        conatinerStyle = "map-container-biz"
      );
    } else {
      return (
        containerStyle = "location-container"
      );
    }
  }

  mapStyle() {

    let classStyle;
    let mapContainer;
    if (this.props.location.pathname !== '/search') {
      return (
        classStyle="map-box"
      );
    } else {
      return (
        classStyle="search-map-box"
      );
    }
  }

  render() {

    return (
      <section className="search-map-container">
      <div className={this.mapStyle()}>
        <div id="map" ref={ map => this.mapNode = map }> </div>
      </div>
      </section>
    );
  }
}

export default withRouter(BusinessMap);
