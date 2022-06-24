import React, { Component, useState, useEffect } from "react";
import EditProfile from "./editProfile";
import MapView from "./mapView";
import NavBar from "./navBar";
import Sidebar from "./sidebar";
import axios from "axios";
import cookie from "react-cookies";

export default function Profile() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedItem, setSelectedItem] = useState(undefined);
  const [showStations, setShowStations] = useState(true);
  const [stations, setStations] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:80/api/stations/", {
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
    <div class="container-fluid p-0" style={{ overflowX: "hidden" }}>
      <NavBar />
      <div className="row">
        <Sidebar
          selectedItem={selectedItem}
          items={[
            {
              id: 1,
              label: "edit profile",
              handleClick: function () {
                setSelectedItem(this);
              },
            },
            {
              id: 2,
              label: "my stations",
              handleClick: function () {
                setSelectedItem(this);
              },
            },
          ]}
        />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {selectedItem && selectedItem.id == 1 ? (
            <EditProfile></EditProfile>
          ) : (
            <div style={{ width: "80vw", height: "90vh", margin: "auto" }}>
              <MapView
                stations={stations}
                setSelectedStation={setSelectedStation}
                selectedStation={selectedStation}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
