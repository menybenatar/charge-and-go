import React, { useState, useEffect } from "react";
export default function StationTab({
  station,
  setSelectedStation,
  selectedStation,
}) {
  function tabClicked(e) {
    if (selectedStation && selectedStation._id === station._id)
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
        (selectedStation && selectedStation._id === station._id ? "active" : "")
      }
      aria-current="true"
    >
      <div class="d-flex w-100  justify-content-between">
        <strong class="mb-1">{station.address}</strong>
      </div>
      <div class="col-10 mb-1 small" style={{ "text-align": "left" }}>
        {" "}
        {station.address}
      </div>
    </a>
  );
}
