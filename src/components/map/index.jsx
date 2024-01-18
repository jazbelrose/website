import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location, address }) => {
  const mapRef = useRef(null);
  let mapInstance = null; // To keep track of the map instance

  useEffect(() => {

    // Only create a new map if we don't have an instance yet
    if (mapRef.current && location && !mapInstance) {
      mapInstance = L.map(mapRef.current).setView([location.lat, location.lng], 20);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '' // Customized attribution
      }).addTo(mapInstance);

      // Create a popup and add it to the map
      L.popup()
        .setLatLng([location.lat, location.lng])
        .setContent(address)
        .openOn(mapInstance);
    }

    // Cleanup function to remove map instance
    return () => {
      
      if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
      }
    };
  }, [location, address]);

  return <div id="map" style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
};

export default Map;
