import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import LocationPin from './LocationPin/LocationPin';

const Map = ({ arrayOfCities }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        defaultCenter={{
          lat: -25.451414,
          lng: -49.283618
      }}
        defaultZoom={5}
      >
        {
          arrayOfCities.map((city) => (
            <LocationPin
              key={city.address}
              lat={city.lat}
              lng={city.lng}
              text={city.address}
            />
          ))
        }
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;

//https://blog.logrocket.com/integrating-google-maps-react/