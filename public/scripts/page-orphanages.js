const happyMap = L.map('mapid').setView([-30.0826464, -51.2131719], 14);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(happyMap);

L.marker([-30.0826464, -51.2131719])
    .addTo(happyMap)
    .bindPopup('cantinho Vó Georgina')
    .openPopup();