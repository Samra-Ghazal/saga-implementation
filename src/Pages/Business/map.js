import React, { useState } from "react";
import axios from "axios";
import Location from "./map/location";
import SearchBar from "./map/searchbar";
import { defaultLocation } from "./helper"; // Assuming defaultLocation is exported from a separate file
import BusinessName from "./map/businesname";

const Map = ({ result, setAddress, address, action }) => {
  const APIKEY = "1a12e15218234ec6838a401380c55b08";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setAddress(value);
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          e.target.value
        )}&key=${APIKEY}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Search error: ", error);
    }
  };

  const handleResultClick = (result) => {
    setSelectedLocation(result);
    setSearchTerm(result.formatted);
    setAddress(result.formatted);
    setSearchResults([]);
  };

  const selectedLocationHandlers = async (location) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          location.lat
        )}+${encodeURIComponent(location.lng)}&key=${APIKEY}`
      );
      setSearchTerm(response.data.results[0].formatted);
      setAddress(response.data.results[0].formatted);
      setSelectedLocation(response.data.results[0]);
    } catch (error) {}
  };

  return (
    <div className="p-1 min-h-[250px] map-container">
      <div id="map" className="position-relative">
        <BusinessName action={action} result={result} />
        <SearchBar
          address={address}
          setAddress={setAddress}
          location={selectedLocation}
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          searchResults={searchResults}
          handleResultClick={handleResultClick}
        />
        <Location
          action={action}
          center={[
            selectedLocation.geometry?.lat || defaultLocation.geometry.lat,
            selectedLocation.geometry?.lng || defaultLocation.geometry.lng,
          ]}
          defaultGeometry={{
            lat: 33.6938882232111,
            lng: 73.0651304125786,
          }}
          zoom={17}
          address={address}
          selectedLocationHandler={selectedLocationHandlers}
        />
      </div>
    </div>
  );
};

export default Map;
