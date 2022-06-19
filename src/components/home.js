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

    {
      NAME: "station 2",
      DESCRIPTION: "station 2 description",
      location: [32, 34.965499],
      STATION_ID: 1423,
    },
    {
      NAME: "station 1",
      DESCRIPTION: "station 1 description",
      location: [32, 34.9554929],
      STATION_ID: 12346,
    },
    {
      NAME: "station 1",
      DESCRIPTION: "station 1 description",
      location: [32, 34.9554399],
      STATION_ID: 12345,
    },
    {
      NAME: "station 1",
      DESCRIPTION: "station 1 description",
      location: [32, 34.9554499],
      STATION_ID: 12344,
    },
    {
      NAME: "station 1",
      DESCRIPTION: "station 1 description",
      location: [32, 34.9555499],
      STATION_ID: 12343,
    },
    {
      NAME: "station 1",
      DESCRIPTION: "station 1 description",
      location: [32, 34.9655499],
      STATION_ID: 12342,
    },
    {
      NAME: "station 1",
      DESCRIPTION: "station 1 description",
      location: [32, 34.9556499],
      STATION_ID: 12341,
    },
    {
      NAME: "station 1",
      DESCRIPTION: "station 1 description",
      location: [32, 34.9556499],
      STATION_ID: 123413,
    },
  ];

  return (
    <div class="container-fluid p-0 " style={{ overflowX: "hidden" }}>
      <NavBar />
      <div className="row flex-grow-1" style={{ height: "93%" }}>
        <div className="col-sm-12 col-md-3 p-0 h-100">
          <TabView
            stations={stations}
            setSelectedStation={setSelectedStation}
            selectedStation={selectedStation}
          />
        </div>
        <div
          className="col-sm-12 col-md-9 p-0 h-100"
          style={{ overflowY: "scroll" }}
        >
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
