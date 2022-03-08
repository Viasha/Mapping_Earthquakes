// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2>" + feature.properties.name + "</h2>"+ "<h3>"  + feature.properties.city + feature.properties.country + "</h3>" );
      }
}).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Accessing the airprt GeoJSON URL

let airportData= "https://raw.githubusercontent.com/Viasha/Mapping_Earthquakes/main/majorAirports.json";



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
      onEachFeature: function(feature, layer) {
         layer.bindPopup("<h2>" + "Airport code:" +  feature.properties.faa + "</h2>" + "<h3>" + "Airport name:" + feature.properties.name + "</h3>");
    }

  }).addTo(map);

  L.geoJSON(airportData, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, ) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2>" + "Airport code:" + feature.properties.faa + "</h2>"+ "<h3>" + "Airport name:" + feature.properties.name + "</h3>" );
      }
}).addTo(map);





// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
// }}.addTo(map);