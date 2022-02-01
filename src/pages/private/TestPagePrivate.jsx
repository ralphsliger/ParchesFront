import { useState, useRef, useMemo } from 'react'
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CrearParcheModal from '../../components/private/CrearParcheModal'

export default function TestPagePrivate () {
  const center = {
    lat: 51.505,
    lng: -0.09
  }
  const [position, setPosition] = useState(center)
  function DraggableMarker () {
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
    const map = useMapEvents({
      click () {
        map.locate()
      },
      locationfound (e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      }

    }
    )
    console.log(position)
    return (
      <Marker
        draggable
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <Popup minWidth={90}>
          <span>
            oe
          </span>
        </Popup>
      </Marker>
    )
  }

  return (
    <>
      <CrearParcheModal />
      <MapContainer
        center={[51.505, -0.09]}
        zoom={14}
        style={{ height: '100vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* <MapConsumer>
          {(map) => {
            console.log('map center:', map.getCenter())
            map.on('click', function (e) {
              const { lat, lng } = e.latlng
              L.marker([lat, lng], { icon }).addTo(map)
            })
            return null
          }}
        </MapConsumer> */}
        <DraggableMarker />
      </MapContainer>
    </>
  )
}
