import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location, address }) => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (mapRef.current && location) {
      const map = L.map(mapRef.current).setView([location.lat, location.lng], 20);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '' // Customized attribution
      }).addTo(map);

      // Create a popup and add it to the map
      const popup = L.popup()
        .setLatLng([location.lat, location.lng])
        .setContent(address)
        .openOn(map);
    }
  }, [location, address]);

  return <div id="map" style={{ height: '100%' }} ref={mapRef}></div>;
};

export default Map;
