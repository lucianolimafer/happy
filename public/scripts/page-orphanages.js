
// create map
const happyMap = L.map('mapid').setView([-30.0826464, -51.2131719], 14);


// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(happyMap);


// create icon
const icon = L.icon({
    iconUrl: "../public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Cantinho da Vó Georgina <a href="orphanages.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create marker
L.marker([-30.0826464, -51.2131719], { icon })
    .addTo(happyMap)
    .bindPopup(popup)
