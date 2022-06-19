import React, { useState, useEffect } from "react";
export default function StationTab({
  station,
  setSelectedStation,
  selectedStation,
}) {
  function tabClicked(e) {
    if (selectedStation && selectedStation.STATION_ID === station.STATION_ID)
      setSelectedStation(null);
    else {
      setSelectedStation(station);
    }
  }

  return (
    <a
      href="#"
      onClick={tabClicked}
      class={
        "list-group-item list-group-item-action py-3 lh-tight p-4 " +
        (selectedStation && selectedStation.STATION_ID === station.STATION_ID
          ? "active"
          : "")
      }
      aria-current="true"
    >
      <div class="d-flex w-100  justify-content-between">
        <strong class="mb-1">{station.NAME}</strong>
      </div>
      <div class="col-10 mb-1 small" style={{ "text-align": "left" }}>
        {" "}
        {station.DESCRIPTION}
      </div>
    </a>
  );
}
