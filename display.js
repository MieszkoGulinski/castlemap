/* global L */

function lookupColorByStatus (status) {
  // Z M R F
  if (status === 'Z') return 'green'
  if (status === 'R') return 'olive'
  if (status === 'F') return 'red'
  if (status === 'M') return 'blue'
}

function displayDataOnMap(data, mapObject) {
  data.forEach(function(entry) {
    if (!entry.lat || !entry.lon) return

    var marker = L.circle([entry.lat, entry.lon], {
      color: lookupColorByStatus(entry.status),
      fillColor: lookupColorByStatus(entry.status),
      fillOpacity: 0.3,
      radius: 10,
      weight: 5,
    }).addTo(mapObject)

    var label = entry.name + ' ' + entry.id + ' ' + entry.status
    marker.bindPopup(label)
  })
}

document.addEventListener('DOMContentLoaded', function () {
  var mapObject = L.map('map-wrapper').setView([52.2, 19.1], 7);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }
  ).addTo(mapObject)

  fetch('results.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      displayDataOnMap(data, mapObject)
    })
})
