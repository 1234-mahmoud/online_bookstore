import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap = () => {
  const mapRef = useRef();

  // Custom hook to handle Ctrl + scroll zoom
  const ControlZoomHandler = () => {
    const map = useMap();

    useEffect(() => {
      const mapElement = mapRef.current._container;

      const handleWheelZoom = (e) => {
        if (!e.ctrlKey) {
          e.preventDefault(); // Prevent map zooming without Ctrl key
        } else {
          map.scrollWheelZoom.enable(); // Enable zooming when Ctrl is pressed
        }
      };

      const handleKeyDown = (e) => {
        if (e.key === 'Control') {
          map.scrollWheelZoom.enable(); // Enable scroll zoom when Ctrl is pressed
        }
      };

      const handleKeyUp = (e) => {
        if (e.key === 'Control') {
          map.scrollWheelZoom.disable(); // Disable scroll zoom when Ctrl is released
        }
      };

      // Disable zoom by default
      map.scrollWheelZoom.disable();

      // Add event listeners
      mapElement.addEventListener('wheel', handleWheelZoom, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      // Clean up listeners on unmount
      return () => {
        mapElement.removeEventListener('wheel', handleWheelZoom);
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }, [map]);

    return null;
  };

  return (
    <div className="map">
      <MapContainer
        ref={mapRef}
        center={[20, 0]} // Initial map center (latitude, longitude)
        zoom={2}         // Initial zoom level
        style={{ height: '600px', width: '100%' }}
        scrollWheelZoom={false} // Disable scroll zoom by default
      >
        <ControlZoomHandler /> {/* Custom hook to control Ctrl+scroll */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default WorldMap;
