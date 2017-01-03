'use strict';
var springsMap = initMap('springs-map');
var springs = getSprings();
buildMultipleMarkers(springs).forEach(function(marker) {
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
	var iconObj = spring.isHot ? yellowIcon : blueIcon;
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
		content += '<img class="spring-picture" src="' + marker.picture + '">';
	}
	return content;
}

function getSprings() {
	return [{
		// TODO: find the correct name
		label: "Дървеница",
		description: null,
		picture: null,
		lat: 42.65301,
		lng: 23.36604,
		isHot: false
	}, {
		label: "Сердика",
		description: null,
		picture: "./img/springs/serdika.jpg",
		lat: 42.69991,
		lng: 23.32413,
		isHot: true
	}, {
		label: "Конската чешма",
		description: null,
		picture: null,
		lat: 42.88987,
		lng: 25.32530,
		isHot: false
	}, {
		label: "Вонящата вода",
		description: "Водата има силен мирис на сяра, който обаче преминава след няколкодневен престой",
		picture: null,
		lat: 42.81417,
		lng: 25.30611,
		isHot: false
	}, {
		label: "Соколски манастир",
		// TODO: през ... година
		description: "Чешмата е построена от Уста̀ Колю Фичето",
		picture: "./img/springs/sokolski_manastir.jpg",
		lat: 42.79733,
		lng: 25.33839,
		isHot: false
	}, {
		label: "Любовната чешма",
		description: null,
		picture: null,
		lat: 42.87260,
		lng: 25.31458,
		isHot: false
	}];
}
