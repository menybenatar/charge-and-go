import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import { compose, withProps } from "recompose";
import MapPopup from "./mapPopup";

const InnerMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `91%` }} />,
    containerElement: <div style={{ height: `91%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ stations, setSelectedStation, selectedStation }) => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 32, lng: 34.855499 }}>
    {stations.map((station) => (
      <Marker
        key={station.STATION_ID}
        position={{
          lat: station.location[0],
          lng: station.location[1],
        }}
        onClick={() => {
          setSelectedStation(station);
        }}
        icon={{
          url: `/lightning.svg`,
          scaledSize: new window.google.maps.Size(40, 40),
        }}
      />
    ))}

    {selectedStation && (
      <InfoWindow
        onCloseClick={() => {
          setSelectedStation(null);
        }}
        position={{
          lat: selectedStation.location[0],
          lng: selectedStation.location[1],
        }}
      >
        <MapPopup station={selectedStation} />
      </InfoWindow>
    )}
  </GoogleMap>
));

export default function MapView({
  stations,
  selectedStation,
  setSelectedStation,
}) {
  return (
    <InnerMap
      setSelectedStation={setSelectedStation}
      selectedStation={selectedStation}
      stations={stations}
    />
  );
}
