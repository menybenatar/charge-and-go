import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyFancyComponent from "../components/map"
import Map from "./map2";

export default class MapView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Map stations ={[{NAME: "chen",DESCRIPTION:"chen des",location:[32,34.955499],STATION_ID:1234}]} />    );
  }
}
