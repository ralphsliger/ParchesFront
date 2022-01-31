import { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/system'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import { useForm } from '../../hooks/useForm'


const CrearParcheModal = () => {

  const [values, handleInputChange, reset] = useForm({
    search: '',
})
const [position, setPosition] = useState(null)

const { search } = values;

  let formData = new FormData();

  const [state, setState] = useState([6.217, -75.567])

  const provider = new OpenStreetMapProvider()
  let results = provider.search({ query: state })
  const datePick = new Date().toISOString().split('T')[0]

  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

  const handleClickOpen = (scrollType) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  const submitForm = async (e) => {
    e.preventDefault()
    handleClose()
  }

  const handleEviarBusqueda = () => {
    const results = provider.search({ query: search })
    .then(log=>(setState(log[0].bounds[0])))
    .catch(e => console.log(e))
    reset();
    LocationMarker()
  };

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(state)
        map.flyTo(state, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

  // console.log(state.bounds[0]);
  

  return (
    <div>
      <div className='wrapper bg-red-800'>
        <div className='button-new'>
          <div className='icon-new self-center flex justify-between'>
            <span onClick={handleClickOpen('paper')} className='cursor-pointer'>Crear Parche </span>
          </div>
        </div>
      </div>

      <Dialog
        className='bg-black bg-opacity-50'
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <form>
          <DialogTitle id='scroll-dialog-title'>

            <Box>
              <div className='flex justify-between mt-3'>
                <div>
                  <label className=' text-gray-600' htmlFor='nombreParche'>Nombre del parche:</label>
                  <input required name='nombreParche' className='w-full rounded-lg bg-gray-100 px-3' type='text' id='inputNombreParche' />
                </div>

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
            <div className='flex flex-col'>
              <label className=' text-gray-600' htmlFor='nombreParche'>Fecha y hora del parche:</label>
              <div className='flex mt-2'>
                <div className=''>
                  <input name='fechaParche' required className='h-7 rounded-lg bg-slate-100 px-1 ' type='date' min={datePick} />
                </div>
                <div className='space-x-2'>
                  <i className='fas fa-calculator date-budget' />
                  <input required type='time' name='presupuesto' className='rounded-lg bg-slate-100 px-1 h-7 pl-1' />
                </div>
              </div>
            </div>
            <textarea required name='descripcionProyecto' className='mt-4 pl-2 pt-2 text-sm rounded-md input-perfil bg-gray-100' placeholder='Describe tu parche!' id='w3review' rows='7' cols='75' />
            <input type='text' name='lider' className='hidden' />
          </DialogContent>
          <input type='text' name='search' onChange={handleInputChange} value={search}/>
          <button onClick={handleEviarBusqueda}>Enviar</button>
          {/* <input type='text' onChange={(e) => setState(e.target.value)} /> */}

          <MapContainer id='map' center={state} zoom={14} scrollWheelZoom={false} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={state}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

          <DialogContent />

          <div>
            <DialogContent>
              <div className='text-center'>
                <input className='w-1/3 h-7 cursor-pointer filled-button mt-8 mb-5' type='submit' value='CREAR PARCHE' />
              </div>
            </DialogContent>
          </div>
        </form>

      </Dialog>
    </div>
  )
}

export default CrearParcheModal
