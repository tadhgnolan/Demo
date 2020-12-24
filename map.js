var button = document.getElementById('btn');
var input = document.getElementById('mapsearch');
var placeHolder = document.getElementById('map-canvas');

function initMap() {
  var map = new google.maps.Map(placeHolder, {
    center: {
      lat: 12.9946817,
      lng: 80.1824916,
    },
    zoom: 11,
    minZoom: 10,
    maxZoom: 15,
    scrollwheel: false,
    mapTypeID: google.maps.MapTypeId.ROADMAP,
  });

  //autocomplete

  var autocompvare = new google.maps.places.Autocompvare(input);
}
