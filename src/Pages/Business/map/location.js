import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState, useEffect, useRef } from "react";

const Loaction = ({
  center,
  zoom,
  selectedLocationHandler,
  defaultGeometry,
  address,
  setAddress,
  action,
}) => {
  const [selectedLocation, setSelectedLocation] = useState(defaultGeometry);
  const mapRef = useRef(null);
  const customIcon = L.icon({
    iconUrl: "images/location_marker.png",
    iconSize: [32, 32], // Adjust the size of the marker icon
    iconAnchor: [16, 32],
  });

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setSelectedLocation(e.latlng);
        selectedLocationHandler(e.latlng);
      },
    });

    return selectedLocation ? (
      <Marker position={selectedLocation} draggable={true} icon={customIcon}>
        <Popup>
          Latitude: {selectedLocation.lat} ::::: Longitude:{" "}
          {selectedLocation.lng}
        </Popup>
      </Marker>
    ) : null;
  };

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      map?.setView(center, zoom);
    }
  }, [center, zoom]);

  return (
    <MapContainer
      ref={mapRef}
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{
        height: "40vh",
        width: "100%",
        marginTop: "1rem",
        borderRadius: "5px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <LocationMarker />
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default Loaction;
