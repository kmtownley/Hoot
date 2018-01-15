import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.latitude(),
  lng: latLng.longitude()
});


class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
    this.updateBounds = this.updateBounds.bind(this);
  }

  componentDidMount() {
    let mapOptions;
    mapOptions = {
      center: { lat: 40.7629471996736, lng: -73.97823811645509 },
        zoom: 11
      };
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.map.addListener("idle", this.updateBounds);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.businesses);
  }

  updateBounds() {
    let latLngBounds = this.map.getBounds();
    let ne = latLngBounds.getNorthEast();
    let sw = latLngBounds.getSouthWest();

    this.props.updateBounds({
      north: ne.lat(),
      east: ne.lng(),
      south: sw.lat(),
      west: sw.lng()
    });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }


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


  render() {
    return (
      <section className="search-map-container">
      <div className="search-map-box">
        <div id="map" ref={ map => this.mapNode = map }> </div>
      </div>
      </section>
    );
  }
}

export default withRouter(BusinessMap);
