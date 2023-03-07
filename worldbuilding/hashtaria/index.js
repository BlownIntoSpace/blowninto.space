/* global L */
;(function (window) {
  var imageContainerMargin = 50;  // Margin + padding
  function init (mapid) {
    var minZoom = 2
    var maxZoom = 6
    var img = [
      11352,
      15994
    ]

    // create the map
    var map = L.map(mapid, {
      center: [0, 0],
      zoom: 3,
      //scrollWheelZoom: false,
      zoomDelta: 6,
      wheelPxPerZoomLevel: 512,
      minZoom: minZoom,
      maxZoom: maxZoom
    })

    // assign map and image dimensions
    var rc = new L.RasterCoords(map, img)

    // the tile layer containing the image generated with gdal2tiles --leaflet ...
    L.tileLayer('./tiles/{z}/{x}/{y}.png', {
      noWrap: true,
      attribution: 'Bailey Allen and Alec Jordan'
    }).addTo(map);
}
  init('map')
}(window))
