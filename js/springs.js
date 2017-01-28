---
---
'use strict';
var springsMap = initMap('springs-map');
var springsData = getSpringsData();

buildMultipleMarkers(springsData).forEach(function(marker) {
  marker.addTo(springsMap);
});

function initMap(container) {
	// set up the map
	var map = new L.Map(container);

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 19, attribution: osmAttrib});

	// start the map in Sofia
	map.setView(new L.LatLng(42.89, 25.33),7);
	map.addLayer(osm);

	return map;
}

function buildMultipleMarkers(springs) {
  var markers = [];
  springs.forEach(function(spring) {
    var marker = buildOneMarker(spring);
    markers.push(marker);
  });
  return markers;
}

function buildOneMarker(spring) {
  var iconObj = spring.isHot === "true" ? yellowIcon : blueIcon;
  var marker = L.marker([spring.lat, spring.lng], {icon: iconObj});
  var popup = marker.bindPopup(buildPopupMessage(spring));
  return marker;
}

function buildPopupMessage(marker) {
  var content = "";
  if (marker.label) {
    content += '<h3>' + marker.label + '</h3>';
  }
  if (marker.description) {
    content += '<p>' + marker.description + '</p>';
  }
  if (marker.picture) {
    content += '<img class="spring-picture" src="/assets/img/springs/' + marker.picture + '">';
  }
  return content;
}

function getSpringsData() {
  return {{ site.data.springs | jsonify }};
}
