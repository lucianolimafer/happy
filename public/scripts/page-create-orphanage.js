// create map
const happyMap = L.map('mapid').setView([-30.0826464, -51.2131719], 14);


// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(happyMap);


// create icon
const icon = L.icon({
    iconUrl: "../public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;


// create and add marker
happyMap.on('click', (event) => {
    
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker &&  happyMap.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(happyMap)
})



// add images field
function addPhotoField() {
    // get image container #images
    const container = document.querySelector('#images')

    // get to duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // duplicate
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // verify if the field is clear, if yes add
    const input = newFieldContainer.children[0]
    if (input.value == ""){
        return
    }

    // clear the field before
    input.value = ""

    // add the clone to container #images
    container.appendChild(newFieldContainer)
}


function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //clear the the first field if true
        span.parentNode.children[0].value = ""
        return
    }

    // delete the field
    span.parentNode.remove();
}