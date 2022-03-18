import React, { useState } from "react";
import "../css/home.css";
import MapView from "../components/mapView";
import TabView from "../components/tabView";
import NavBar from "./navBar";

export default function Home({ setStateApp }) {
  const [selectedStation, setSelectedStation] = useState(null);
  const stations = [
    {
      NAME: "station 1",
      DESCRIPTION: "station 1 description",
      location: [32, 34.955499],
      STATION_ID: 1234,
    },
  ];

  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <div className="split left">
          <TabView> </TabView>
        </div>
        <div className="split right">
          <MapView
            stations={stations}
            setSelectedStation={setSelectedStation}
            selectedStation={selectedStation}
          />
        </div>
      </div>
    </div>
  );
}
