import { useState, useRef, useEffect, useMemo } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/system'
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import { useForm } from '../../hooks/useForm'

import { enviarDatos, getDireccion } from '../../redux/actions/EditarParcheAction'

import { FaSearchLocation, FaEdit } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const EditarParcheModal = () => {
  // useForm:
  const [values, handleInputChange, reset] = useForm({
    busquedaMapa: 'Ubicacion ingresada',
    nombreParche: 'Nombre del parche ingresado',
    fechaParche: '',
    horaParche: '',
    descripcionParche: 'Descripcion del parche ingresada',
    categoria: '',
    cupoMaximo: 0
  })
  const {
    busquedaMapa,
    nombreParche,
    fechaParche,
    horaParche,
    descripcionParche,
    categoria,
    cupoMaximo
  } = values
  // perfil que vendra de firebase QUEMADO:
  const perfilQuemado = {
    fotoPerfil: 'https://lh3.googleusercontent.com/a-/AOh14GjY63xk1t90VMywhUXwN1vziqTqRysD59TL_LFR0g=s576-p-rw-no',
    nombreUsuario: 'Anthony Colmenares Rivas'
  }
  // constantes redux:
  const dispatch = useDispatch()
  const direccion = useSelector(store => store.parcheCreado.direccion)
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
  useEffect(() => {
    dispatch(getDireccion(position))
  }, [position])
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
            {direccion}
          </span>
        </Popup>
      </Marker>
    )
  }
  // handle's de formulario
  const handleEnviarFormulario = (e) => {
    e.preventDefault()
    reset()
    console.log(categoria, cupoMaximo)
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
                {/* Info de usuario traido de firebase auth QUEMADO */}
                <div className='flex self-center mx-2'>
                  <div className='flex space-x-4 ml-3'>
                    <img
                      src={perfilQuemado.fotoPerfil}
                      className='rounded-full w-14 h-14'
                      alt='fotoPerfil'
                    />
                    <div className='flex flex-col'>
                      <span className='font-semibold text-sm'>{perfilQuemado.nombreUsuario}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <label
                  className='text-gray-600'
                  htmlFor='inputFechaParche'
                >
                  <strong>
                    Fecha del parche:
                  </strong>
                </label>
                <input
                  required
                  id='inputFechaParche'
                  name='fechaParche'
                  onChange={handleInputChange}
                  value={fechaParche}
                  className='
                  rounded-lg
                  bg-gray-100
                  px-1 '
                  type='date'
                  min={datePick}
                />
              </div>
              <div className='flex flex-col'>
                <label
                  className='text-gray-600'
                  htmlFor='inputHoraParche'
                >
                  <strong>
                    Hora del parche:
                  </strong>
                </label>
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
              <div className='flex flex-col'>
                <label
                  className='text-gray-600'
                  htmlFor='inputCupoMaximo'
                >
                  <strong>
                    Cupo del parche:
                  </strong>
                </label>
                <i className='fas fa-calculator date-budget' />
                <input
                  required
                  id='inputCupoMaximo'
                  name='cupoMaximo'
                  onChange={handleInputChange}
                  value={cupoMaximo}
                  className='
                    rounded-lg
                    bg-gray-100
                    px-1 pl-1'
                  type='number'
                />
              </div>
            </div>
            <textarea
              required
              id='inputDescripcionParche'
              name='descripcionParche'
              onChange={handleInputChange}
              value={descripcionParche}
              className='
              w-full
              mt-4
              pl-2 pt-2
              text-sm
              rounded-md
              bg-gray-100'
              placeholder='¡Describe tu parche!'
              rows='7'
              cols='75'
            />
            <Box sx={{ minWidth: 210, marginTop: 2 }} className='bg-gray-100'>
              <FormControl fullWidth>
                <InputLabel id='inputCategiriaLabel'>Categoria</InputLabel>
                <Select
                  labelId='inputCategiria'
                  id='inputCategiria'
                  name='categoria'
                  onChange={handleInputChange}
                  value={categoria}
                  label='Categoria'
                >
                  <MenuItem value='tecnologia'>TECNOLOGIA</MenuItem>
                  <MenuItem value='videojuegos'>VIDEOJUEGOS</MenuItem>
                  <MenuItem value='arte'>ARTE</MenuItem>
                  <MenuItem value='negocios'>NEGOCIOS</MenuItem>
                  <MenuItem value='moda'>MODA</MenuItem>
                  <MenuItem value='deporte'>DEPORTE</MenuItem>
                  <MenuItem value='gastronomia'>GASTRONOMIA</MenuItem>
                  <MenuItem value='fiesta'>FIESTAS</MenuItem>
                  <MenuItem value='conferencias'>CONFERENCIAS</MenuItem>
                  <MenuItem value='cita'>CITA</MenuItem>
                  <MenuItem value='lectura'>LECTURA</MenuItem>
                  <MenuItem value='aprendizaje'>APRENDIZAJE</MenuItem>
                  <MenuItem value='varios'>VARIOS</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <hr className='my-6' />
            {/* Busqueda de direccion */}
            <div className='flex justify-center'>
              <div className='flex'>
                <label
                  className='
                text-gray-600'
                  htmlFor='nombreParche'
                >
                  <strong>
                    Ubica tu parche:
                  </strong>
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
                    text-black
                    bg-orange-500
                    hover:bg-orange-600
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
            <div className='flex justify-center text-sm'>
              <span><strong>Direccion:</strong> {direccion}</span>
            </div>
          </DialogContent>
          <div className='text-center'>
            <button
              className='
              px-4 py-2
              text-black
              bg-orange-500
              hover:bg-orange-600
              filled-button
              mt-8
              mb-5
              border
              rounded'
              type='submit'
            >
              Editar
            </button>
          </div>
        </form>
    </div>
  )
}
export default EditarParcheModal
