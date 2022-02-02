import { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { useForm } from '../../hooks/useForm'
import { enviarDatos, getDireccion } from '../../redux/actions/CrearParcheActions'
import { useDispatch, useSelector } from 'react-redux'
import Map from './Map'
import DialogTittleModal from './DialogTittleModal'
import DropdownModal from './DropdownModal'
import DescripcionModal from './DescripcionModal'
import FechaModal from './FechaModal'
import { HoraModal } from './HoraModal'
import BusquedaDireccionModal from './BusquedaDireccionModal'
import { FaPlus } from 'react-icons/fa'

const CrearParcheModal = () => {
  // useForm:

  const [values, handleInputChange, reset] = useForm({
    busquedaMapa: '',
    nombreParche: '',
    fechaParche: '',
    horaParche: '',
    fechaFin: '',
    horaFin: '',
    descripcionParche: '',
    categoria: '',
    cupoMaximo: 0
  })

  const {
    busquedaMapa,
    nombreParche,
    fechaParche,
    horaParche,
    fechaFin,
    horaFin,
    descripcionParche,
    categoria,
    cupoMaximo
  } = values

  // perfil que vendra de firebase QUEMADO:

  const perfilQuemado = {
    uId: 'xxx-xxx-xxx-xxx',
    fotoPerfil: 'https://us.123rf.com/450wm/kritchanut/kritchanut1308/kritchanut130800012/21528485-avatar-hombre-foto-de-perfil-vector.jpg?ver=6',
    nombreUsuario: 'Anthony Colmenares Rivas'
  }

  // constantes redux:

  const dispatch = useDispatch()
  const direccion = useSelector(store => store.parcheCreado.direccion)

  // constante predefinida del mapa:

  const center = {
    lat: 6.247148764180042,
    lng: -75.56969157043916
  }
  const descriptionElementRef = useRef(null)

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

  // handle's de formulario

  const handleEnviarFormulario = (e) => {
    e.preventDefault()
    reset()
    console.log(categoria, cupoMaximo)
    dispatch(enviarDatos(
      perfilQuemado.uId,
      nombreParche,
      fechaParche,
      horaParche,
      fechaFin,
      horaFin,
      descripcionParche,
      categoria,
      cupoMaximo,
      position
    ))
    // handleClose()
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

          <DialogTittleModal
            handleInputChange={handleInputChange}
            nombreParche={nombreParche}
            fotoPerfil={perfilQuemado.fotoPerfil}
            nombreUsuario={perfilQuemado.nombreUsuario}
          />

          <DialogContent dividers={scroll === 'paper'}>
            <div className='flex justify-between'>
              <FechaModal
                datePick={datePick}
                handleInputChange={handleInputChange}
                fecha={fechaParche}
                name='fechaParche'
                nombreLabel='Fecha de Inicio:'
              />

              <HoraModal
                handleInputChange={handleInputChange}
                hora={horaParche}
                name='horaParche'
                nombreLabel='Hora de Inicio:'
              />

              <div className='flex flex-col'>
                <label
                  className='text-gray-600'
                  htmlFor='inputCupoMaximo'
                >
                  <strong>
                    Cantidad de personas:
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

            <div className='flex justify-between mt-5'>
              <FechaModal
                datePick={datePick}
                handleInputChange={handleInputChange}
                fecha={fechaFin}
                name='fechaFin'
                nombreLabel='Fecha de Fin:'
              />

              <HoraModal
                handleInputChange={handleInputChange}
                hora={horaFin}
                name='horaFin'
                nombreLabel='Hora de Fin:'
              />

              <div className='flex'>
                <DropdownModal handleInputChange={handleInputChange} categoria={categoria} />
              </div>
            </div>

            <DescripcionModal handleInputChange={handleInputChange} descripcionParche={descripcionParche} />

            <hr className='my-6' />

            {/* Busqueda de direccion */}
            <BusquedaDireccionModal
              handleInputChange={handleInputChange}
              busquedaMapa={busquedaMapa}
              setPosition={setPosition}
              reset={reset}
            />

            {/* Mapa */}
            <Map setPosition={setPosition} position={position} direccion={direccion} />

            <div className='flex justify-center text-sm'>
              <span><strong>Direccion:</strong> {direccion}</span>
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
