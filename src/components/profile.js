import React, { Component, useState } from "react";
import NavBar from "./navBar";
import AsideBar from "./asideBar";
import EditProfile from "./editProfile";

export default function Profile() {
  const [showStations, setShowStations] = useState(true);

  return [
    <NavBar></NavBar>,
    <div className="split left " style={{ height: "100%" }}>
      <AsideBar setShowStations={setShowStations}> </AsideBar>
    </div>,

    <div
      className="split right"
      style={{ "background-color": "#e3f2fd", height: "100%" }}
    >
      {showStations ? <h1>dasgfsdg</h1> : <EditProfile />}
    </div>,
  ];
}
