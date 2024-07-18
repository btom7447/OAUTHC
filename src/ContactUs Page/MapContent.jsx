import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [32, 48], // size of the icon
  iconAnchor: [16, 48], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -48] // point from which the popup should open relative to the iconAnchor
});

// Markers array with positions and popup text
const markers = [
  { position: [7.505256060213586, 4.5873113478440395], popup: 'OAUTHC Ife Hospital Unit' },
  { position: [7.615550712232916, 4.73558440215785], popup: 'Wesley Guild Hospital Unit' },
  { position: [7.633241967711242, 4.74961672734863], popup: 'Ijeshaland Geriatric Center' },
  { position: [7.834595314962962, 4.840944696095432], popup: 'Rural Comprehensive Health Center' },
  { position: [7.500611172622699, 4.481847214954113], popup: 'Urban Comprehensive Health Center' },
];

const MapComponent = () => {
  const mapRef = React.useRef(null); // Ref to the map instance

  const handleClick = (position) => {
    if (mapRef.current) {
      mapRef.current.setView(position, 15); // Set zoom level to 15 and center map on marker position
    }
  };

  return (
    <div className="contact-us-map">
      <MapContainer className='map' center={[7.505256060213586, 4.5873113478440395]} zoom={9} ref={mapRef} zoomControl={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={redIcon} eventHandlers={{ click: () => handleClick(marker.position) }}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;