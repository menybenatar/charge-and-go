import React, { Component, useState } from "react";
import EditProfile from "./editProfile";
import StationTab from "./stationTab";
import "../css/asideBar.css";

export default function AsideBar({ setShowStations }) {
  function onOpenEditProfile() {
    setShowStations(false);
  }
  function onOpenMyStations() {
    setShowStations(true);
  }

  return (
    <div class="h-50  border ">
      <div class="container-fluid ">
        <button class="edit-btn" onClick={onOpenEditProfile}>
          Edit Profile
        </button>
        <button class="station-btn" onClick={onOpenMyStations}>
          My Stations
        </button>
        {/* <div class="row g-3">
          <div class=""></div>
        </div> */}
      </div>
    </div>
  );
}
