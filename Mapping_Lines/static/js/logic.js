// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([41.4124, -81.8479], 4);

// Coordinates for each point to be used in the line.
let line = L.polyline([
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [40.6417, -73.7809],
    [43.6777, -79.6291],
    [41.4124, -81.8479]
    ],
    {
        color: "blue",
        weight: 4,
        opacity: 0.5,
        dashArray: '20,15',
        lineJoin: 'round'
    }
    ).addTo(map);

  // Create a polyline using the line coordinates and make the line red.
// let polyline=L.polyline(
//     [33.9416, -118.4085],
//     [40.6413, 73.7781],
//     [30.1975, 97.6664],
//     [43.6777, 79.6248],
//     {
//     color: "blue",
//     opacity: 0.5,
//     dashArray: '20,15'
//   }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);