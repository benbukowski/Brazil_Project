// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [-10.01194, -51.11583],
  zoom: 4.25
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 20,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([-23.533773, -46.625290], {
  draggable: false,
  title: "1: Sao Paulo",
  marker_symbol: '1'
}).addTo(myMap);

var marker = L.marker([-22.9122, -43.1750], {
  draggable: false,
  title: "2: Rio de Janeiro"
}).addTo(myMap);

var marker = L.marker([-12.97111, -38.51083], {
  draggable: false,
  title: "3: Salvador"
}).addTo(myMap);

var marker = L.marker([-15.7784, -47.9286], {
  draggable: false,
  title: "4: Brasilia"
}).addTo(myMap);

var marker = L.marker([-3.731862, -38.526669], {
  draggable: false,
  title: "5: Fortaleza"
}).addTo(myMap);

var marker = L.marker([-19.912998, -43.940933], {
  draggable: false,
  title: "6: Belo Horizonte"
}).addTo(myMap);

var marker = L.marker([-3.117034, -60.025780], {
  draggable: false,
  title: "7: Manaus"
}).addTo(myMap);

var marker = L.marker([-25.441105, -49.276855], {
  draggable: false,
  title: "8: Curitiba"
}).addTo(myMap);

var marker = L.marker([-8.050000, -34.900002], {
  draggable: false,
  title: "9: Recife"
}).addTo(myMap);

var marker = L.marker([-30.033056, -51.230000], {
  draggable: false,
  title: "10: Porto Alegre"
}).addTo(myMap);