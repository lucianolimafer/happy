const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

// create map
const happyMap = L.map('mapid', options).setView([-30.0826464, -51.2131719], 14);


// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(happyMap);


// create icon
const icon = L.icon({
    iconUrl: "../public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



// create marker
L.marker([-30.0826464, -51.2131719], { icon })
    .addTo(happyMap)





/** image gallary */

function selectImage(event) {
    const button = event.currentTarget

    const bts = document.querySelectorAll(".images button")
    bts.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-datails > img")

    imageContainer.src = image.src
    
    button.classList.add("active")
}