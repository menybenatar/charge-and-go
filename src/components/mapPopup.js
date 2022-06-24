import React, { useState, useEffect } from "react";
export default function MapPopup({ station }) {
  return (
    <div>
      <h2>{station.address}</h2>
      <h4>rating: {station.rating}</h4>
      <h4>Numer of Ratings: {station.num_of_ranks}</h4>
      <h4>Type: {station.stationtype}</h4>
    </div>
  );
}
