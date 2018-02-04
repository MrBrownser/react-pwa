import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import * as mapStyles from "../../gmapsStyle.json";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.377900, lng: 2.173768 }}
    defaultOptions={{ styles: mapStyles }}
    >
  </GoogleMap>
));

class Greeting extends React.Component {
  render () {
    return (
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAU_mIkviIhRwim0rjXlkpcmq4IBy1oLg8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
};

export default Greeting;
