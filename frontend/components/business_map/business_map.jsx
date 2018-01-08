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
    debugger
    const mapOptions = {
      center: { lat: 40.7629471996736, lng: -73.97823811645509 },
        zoom: 13
      };
      // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.businesses);
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
