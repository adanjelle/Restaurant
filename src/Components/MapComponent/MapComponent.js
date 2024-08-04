import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapComponent.css';

const MapComponent = () => {
  const position = [1.747, 40.0573];
  
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={10} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Wajir, Kenya. <br />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png" alt="Kenyan Flag" width="100" />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
