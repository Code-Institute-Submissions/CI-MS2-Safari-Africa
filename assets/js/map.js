let mapTileLayers = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
  {}
);

// --- Open Leaflet JS on map of Africa ---

//Credit: Leaflet JS documentation
let map = L.map("map", {
  layers: [mapTileLayers], // variable from above
  center: [-29.28864, 25.025732], // central lat-lng once loaded
  zoom: 6, // smaller numbers = zoomOut // larger numbers = zoomIn
  minZoom: 2, // max zoomOut permitted
  maxZoom: 18, // max zoomIn permitted
  maxBounds: [
    // stops map from infinite scrolling at edges
    [-75, -190],
    [90, 190],
  ],
  maxBoundsViscosity: 0.5, // elastic bounce-back of map edges
});
