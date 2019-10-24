var myMap = L.map("map", {
  center: [-10.01194, -51.11583],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 20,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var newtry = "data2.txt";

// Grab the data with d3
d3.json(newtry, function(response) {

  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  var lon;
  var lat;
  
  for(var a = 0; a < 50; a++)
  {
	 lon = response.features[a].geometry.coordinates[1];
	 lat = response.features[a].geometry.coordinates[0];
	 console.log(lon);
	 console.log(lat);
	 
	 markers.addLayer(L.marker([lon, lat]));
	 console.log(markers);
  }
		// Add our marker cluster layer to the map
	myMap.addLayer(markers);
  });

  
