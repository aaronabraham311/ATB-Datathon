import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import GoogleMap from 'google-map-react';

const mapStyles = {
  width: '100%',
  height: '100%'
}

const markerStyle = {
  height: '50px',
  width: '50px',
  marginTop: '-50px'
}

const imgStyle = {
  height: '100%'
}


const Marker = ({ title }) => (
  <div style={markerStyle}>
    <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
    <h3>{title}</h3>
  </div>
);


class App extends Component {
  render() {
    return (
      <div >
        <Toolbar />
        <GoogleMap
          style={mapStyles}
          bootstrapURLKeys={{ key: 'AIzaSyALjk29LhHlrUVa06gW9mjpFyCvvCXzhLk' }}
          center={{ lat: 53.53479, lng: -113.50909 }}
          zoom={14}
        >
          <Marker
          title={'Disease Outbreak 5'}
          lat={52.3228}
          lng={-112.7109}
        >
          </Marker>

          <Marker
          title={'Disease Outbreak 1'}
          lat={52.5}
          lng={-111.29}
        >
          </Marker>

          <Marker
          title={'Disease Outbreak 2'}
          lat={51.78}
          lng={-112.6}
        >
          </Marker>

          <Marker
          title={'Disease Outbreak 3'}
          lat={52.891}
          lng={-112.10}
        >
          </Marker>


          <Marker
          title={'Disease Outbreak 4'}
          lat={52.99}
          lng={-113.001}
        >
          </Marker>

          <Marker
          title={'Disease Outbreak 6'}
          lat={51.201963}
          lng={-112.871750}
        >
          </Marker>

          <Marker
          title={'Disease Outbreak 7'}
          lat={52.717579}
          lng={-111.126687}
        >
          </Marker>

          <Marker
          title={'Disease Outbreak 8'}
          lat={53.013441}
          lng={-112.068611}
        >
          </Marker>

          <Marker
          title={'Disease Outbreak 9'}
          lat={53.089437}
          lng={-113.138194}
        >
          </Marker>

          <Marker
          title={'Disease Outbreak 10'}
          lat={53.283530}
          lng={-112.628865}
        >
          </Marker>
        </GoogleMap>
      </div>
    )
  }
}

export default App;
