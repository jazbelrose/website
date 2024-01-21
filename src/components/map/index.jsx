import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = React.memo(({ location, address }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Initialize the map only once
      mapInstance.current = L.map(mapRef.current).setView([location.lat, location.lng], 20);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(mapInstance.current);
    }
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.setView([location.lat, location.lng], 13);
      L.popup()
        .setLatLng([location.lat, location.lng])
        .setContent(address)
        .openOn(mapInstance.current);
    }
  }, [location, address]);
  

  return <div id="map" style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
});

export default React.memo(Map);
