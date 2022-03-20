import React, { useState, useEffect } from "react";
export default function MapPopup({ station }) {
  return (
    <div>
      <h2>{station.NAME}</h2>
      <p>{station.DESCRIPTION}</p>
    </div>
  );
}
