import React from 'react'
import { MapConsumer, MapContainer, TileLayer } from 'react-leaflet'
import DraggableMarker from './DraggableMarker'

const Map = ({ setPosition, position, direccion }) => {
  return (
    <MapContainer
      id='map'
      center={[6.247148764180042, -75.56969157043916]}
      zoom={14}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='
        &copy;
        SofkaU'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <DraggableMarker setPosition={setPosition} position={position} direccion={direccion} />
      <MapConsumer>
        {(map) => {
          map.flyTo(position)
          return null
        }}
      </MapConsumer>
    </MapContainer>
  )
}

export default Map
