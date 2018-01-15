export default class MarkerManager {
  constructor(map) {

    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  compoenentdidMount() {

  }

  updateMarkers(businesses){

    const bizObject = {};
    if (businesses !== undefined) {
    businesses.forEach((business) => bizObject[business.id] = business);
    } else {
      bizObject[this.props.business.id] = business;
    }

    businesses
      .filter(business => !this.markers[business.id])
      .forEach((newBusiness,idx) =>
        this.createMarkerFromBusiness(newBusiness, idx+1, this.handleClick));


        Object.keys(this.markers)
         .filter((businessId) => !bizObject[businessId])
         .forEach((businessId) => this.removeMarker(this.markers[businessId]));

    // Object.values(businesses).forEach(business => {
    //   bizObject[business.id] = business;
    // });
    //
    // Object.values(businesses).forEach( (business) => {
    //   if (!this.markers[business.id]) {
    //     this.createMarkerFromBusiness(business);
    //   }
    // });



    // Object.values(businesses).forEach(business => {
    //   this.markers.push(this.createMarkerFromBusiness(business));
    //
    // });
    }

  removeMarker(marker) {

    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }

  createMarkerFromBusiness(business) {

    const position = { lat: business.latitude, lng: business.longitude };
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id
    });

    let infoWindow = new google.maps.InfoWindow({
        content: business.biz_name
    });
    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
    this.markers[marker.businessId] = marker;
    return marker;
  }
}
