
//   let mapToken=mapToken;
//   console.log(mapToken);
  mapboxgl.accessToken=mapToken;
	// mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsdGEtc3R1ZHVlbnQiLCJhIjoiY2xvMDk0MTVhMTJ3ZDJrcGR5ZDFkaHl4ciJ9.Gj2VU1wvxc7rFVt5E4KLOQ';
    const map = new mapboxgl.Map({
        container: 'map',
        // You can add layers to the predetermined slots within the Standard style basemap.
        style: 'mapbox://styles/mapbox/standard',
        center: [77.2090, 28.61391],//starting position [lng,lat]
        zoom: 5,
        maxZoom: 6
    });
