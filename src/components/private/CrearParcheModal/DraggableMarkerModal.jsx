import React, { useMemo, useRef } from 'react'
import { Marker, Popup } from 'react-leaflet'

const DraggableMarkerModal = ({ setPosition, position, direccion }) => {
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend () {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      }
    }),
    []
  )
  return (
    <Marker
      draggable
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span>
          {direccion}
        </span>
      </Popup>
    </Marker>
  )
}

export default DraggableMarkerModal
