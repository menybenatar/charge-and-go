import React, { Component, useState } from "react";
import EditProfile from "./editProfile";
import StationTab from "./stationTab";

export default function AsideBar({ setShowStations }) {
  function onOpenEditProfile() {
    setShowStations(false);
  }
  function onOpenMyStations() {
    setShowStations(true);
  }

  return (
    <div class="h-50 p-5 bg-light border rounded-3">
      <div class="container-fluid py-5">
        <button onClick={onOpenEditProfile}>Edit Profile</button>
        <button onClick={onOpenMyStations}>My Stations</button>
        <div class="row g-3">
          <div class=""></div>
        </div>
      </div>
    </div>
  );
}
