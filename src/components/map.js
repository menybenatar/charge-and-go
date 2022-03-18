import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `90%` }} />,
    containerElement: <div style={{ height: `90%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }), withScriptjs, withGoogleMap)
  
  ((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 32, lng: 	34.855499 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 32, lng: 	34.955499 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 32, lng: 	34.755499 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.setState({ isMarkerShown: true })

  }

  handleMarkerClick = (e) => {
    alert(e.latLng)
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}