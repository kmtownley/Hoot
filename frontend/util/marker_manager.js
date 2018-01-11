export default class MarkerManager {
  constructor(map) {

    this.map = map;
    this.markers = [];
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(businesses){
    Object.values(businesses).forEach(business => {
      this.markers.push(this.createMarkerFromBusiness(business));

    });
  }


  createMarkerFromBusiness(business) {
    const position = { lat: business.latitude, lng: business.longitude };
    const marker = new google.maps.Marker({
      position,
      map: this.map,
    });
    let infoWindow = new google.maps.InfoWindow({
        content: business.biz_name
    });
    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
    return marker;
  }
}
