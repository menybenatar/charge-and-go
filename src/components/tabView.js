import React, { Component } from "react";
import StationTab from "./stationTab";

export default function TabView({
  stations,
  setSelectedStation,
  selectedStation,
}) {
  {
    return (
      <div>
        {stations.map((station) => (
          <StationTab
            key={station.STATION_ID}
            station={station}
            setSelectedStation={setSelectedStation}
            selectedStation={selectedStation}
          />
        ))}
      </div>
    );
  }
}
