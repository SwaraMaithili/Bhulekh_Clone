// frontend/src/components/MapSidebar.js
import React from 'react';

const MapSidebar = () => {
  return (
    <div className="map-sidebar" style={{ width: '30%', float: 'left', padding: '10px' }}>
      <img
        src="/maharashtra-map.png"
        alt="Maharashtra Map"
        style={{ width: '100%', borderRadius: '8px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default MapSidebar;