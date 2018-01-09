export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(businesses){
    // Object.keys(businesses).forEach( key => {
    //   let latLng = { lat: businesses[key].latitude, lng: businesses[key].longitude};
    Object.values(businesses).forEach(business => {
      this.markers.push(this.createMarkerFromBusiness(business));
      debugger
      console.log()
    });
  }

  createMarkerFromBusiness(business) {
    debugger
    const position = { lat: business.latitude, lng: business.longitude };
    const marker = new google.maps.Marker({
      position,
      map: this.map,
    });
  }
}
