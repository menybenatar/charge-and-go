import React, { useState, useEffect } from "react";
import "../css/home.css";
import MapView from "../components/mapView";
import TabView from "../components/tabView";
import NavBar from "./navBar";
import axios from "axios";
import cookie from "react-cookies";

export default function Home({ setStateApp }) {
  const [selectedStation, setSelectedStation] = useState(null);
  const [stations, setStations] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:80/api/stations/all", {
        headers: {
          Authorization: cookie.load("token"),
        },
      });
      console.log(res);
      setStations(res.data);
    } catch (err) {
      // setError(true);
    }
  }, []);

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
