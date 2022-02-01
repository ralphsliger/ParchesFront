import { useState, useRef, useEffect, useMemo } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/system'
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import { useForm } from '../../hooks/useForm'
import { enviarDatos } from '../../redux/actions/CrearParcheActions'
import { FaSearchLocation, FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const CrearParcheModal = () => {
  // useForm:

  const [values, handleInputChange, reset] = useForm({
    busquedaMapa: '',
    nombreParche: '',
    fechaParche: '',
    horaParche: '',
    descripcionParche: ''
  })

  const {
    busquedaMapa,
    nombreParche,
    fechaParche,
    horaParche,
    descripcionParche
  } = values

  // constantes redux:

  const dispatch = useDispatch()

  // constantes del mapa:

  const center = {
    lat: 6.247148764180042,
    lng: -75.56969157043916
  }
  const descriptionElementRef = useRef(null)
  const provider = new OpenStreetMapProvider()

  // estados del mapa:

  const [position, setPosition] = useState(center)

  // estados del modal:

  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

  // variable de fecha para formulario:

  const datePick = new Date().toISOString().split('T')[0]

  // efectos del modal:

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  // handle's del modal:

  const handleClickOpen = (scrollType) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // funcion del mapa para mover el marcador:

  function DraggableMarker () {
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend () {
          const marker = markerRef.current
          if (marker != null) {
            console.log('marker', marker.getLatLng())
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
            oe
          </span>
        </Popup>
      </Marker>
    )
  }

  // handle's de formulario

  const handleEnviarFormulario = (e) => {
    e.preventDefault()
    reset()
    dispatch(enviarDatos(
      nombreParche,
      fechaParche,
      horaParche,
      descripcionParche,
      position
    ))
    // handleClose()
  }

  const handleEviarBusqueda = () => {
    provider.search({ query: busquedaMapa })
      .then(log => (
        setPosition({ lat: log[0].bounds[0][0], lng: log[0].bounds[0][1] })))
      .catch(e => console.log(e))
    reset()
  }

  return (
    <div>

      {/* Boton para abrir modal */}
      <div className='flex justify-end m-5'>
        <button
          onClick={handleClickOpen('paper')}
          className='
          rounded-full
          bg-yellow-500
          p-3
          '
        >
          <span
            className='
            cursor-pointer
            text-xl
            text-black'
          >
            <FaPlus />
          </span>
        </button>
      </div>

      {/* Modal */}
      <Dialog
        className='bg-black bg-opacity-50'
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <form onSubmit={handleEnviarFormulario}>
          <DialogTitle id='scroll-dialog-title'>

            <Box>
              <div className='flex justify-between mt-3'>
                <div>

                  <label
                    className='
                    text-gray-600'
                    htmlFor='nombreParche'
                  >
                    Nombre del parche:
                  </label>
                  <input
                    required
                    id='inputNombreParche'
                    name='nombreParche'
                    onChange={handleInputChange}
                    value={nombreParche}
                    className='
                    w-full
                    rounded-lg
                    bg-gray-100
                    px-3'
                    type='text'
                  />
                </div>

                {/* Info de usuario traido de firebase auth PENDIENTE */}
                <div className='flex self-center mx-2'>
                  <div className='flex space-x-4'>
                    <img className='rounded-full w-10 h-10' alt='Profile' />
                    <div className='flex flex-col'>
                      <span className='font-semibold text-sm'>oe</span>
                      <span className='text-xs font-medium text-blue-500'>oe</span>
                    </div>
                  </div>
                </div>

              </div>

            </Box>
          </DialogTitle>

          <DialogContent dividers={scroll === 'paper'}>
            <div className='flex justify-center'>
              <div className='flex mt-2'>
                <label
                  className='text-gray-600'
                  htmlFor='inputFechaParche'
                >
                  Fecha y hora del parche:
                </label>
                <input
                  required
                  id='inputFechaParche'
                  name='fechaParche'
                  onChange={handleInputChange}
                  value={fechaParche}
                  className='
                  ml-2
                  rounded-lg
                  bg-gray-100
                  px-1 '
                  type='date'
                  min={datePick}
                />

                <div className='space-x-2'>
                  <i className='fas fa-calculator date-budget' />
                  <input
                    required
                    id='inputHoraParche'
                    name='horaParche'
                    onChange={handleInputChange}
                    value={horaParche}
                    className='
                    rounded-lg
                    bg-gray-100
                    px-1 pl-1'
                    type='time'
                  />
                </div>

              </div>
            </div>
            <textarea
              required
              id='inputDescripcionParche'
              name='descripcionParche'
              onChange={handleInputChange}
              value={descripcionParche}
              className='
              mt-4
              pl-2 pt-2
              text-sm
              rounded-md
              bg-gray-100'
              placeholder='Describe tu parche!'
              rows='7'
              cols='75'
            />
            <input type='text' name='lider' className='hidden' />

            <hr className='my-6' />

            {/* Busqueda de direccion */}
            <div className='flex justify-center'>
              <div className='flex'>
                <label
                  className='
                text-gray-600'
                  htmlFor='nombreParche'
                >
                  Busca tu direccion:
                </label>
                <input
                  id='inputBusqueda'
                  name='busquedaMapa'
                  onChange={handleInputChange}
                  className='
                  ml-1
                  rounded-lg
                  bg-gray-100
                  px-3'
                  type='text'
                  value={busquedaMapa}
                />
                <div className='ml-1'>
                  <button
                    onClick={handleEviarBusqueda}
                    className='
                    px-2 py-1
                    text-white
                    bg-blue-900
                    hover:bg-blue-800
                    filled-button
                    border
                    rounded'
                    type='button'
                  >
                    <FaSearchLocation />
                  </button>
                </div>
              </div>
            </div>

            {/* Mapa */}
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
              <DraggableMarker />
              <MapConsumer>
                {(map) => {
                  map.flyTo(position)
                  return null
                }}
              </MapConsumer>
            </MapContainer>
            <div className='flex justify-center'>
              <span>Direccion: Cra.13B #161-70</span>
            </div>

          </DialogContent>

          <div className='text-center'>
            <button
              className='
              px-4 py-2
              text-white
              bg-blue-900
              hover:bg-blue-800
              filled-button
              mt-8
              mb-5
              border
              rounded'
              type='submit'
            >
              Crear
            </button>
          </div>
        </form>

      </Dialog>

    </div>
  )
}

export default CrearParcheModal
