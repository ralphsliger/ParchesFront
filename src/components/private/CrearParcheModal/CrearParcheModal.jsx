import { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import { useForm } from '../../../hooks/useForm'
import { enviarParche, getDireccion } from '../../../redux/actions/CrearParcheActions'
import { useDispatch, useSelector } from 'react-redux'
import DialogTittleModal from './DialogTittleModal'
import DialogContentModal from './DialogContentModal'
import BotonAbrirCrearModal from './BotonAbrirCrearModal'

const CrearParcheModal = () => {
  const user = useSelector(state => state.auth)

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
    uId: user.uid,
    fotoPerfil: user.imagenUrl,
    nombreUsuario: user.nombres
  }

  // constantes redux:

  const dispatch = useDispatch()
  const direccion = useSelector(store => store.parcheCreado.direccion)

  // constante predefinida del mapa:

  const center = {
    lat: 6.247148764180042,
    lng: -75.56969157043916
  }

  // estados del mapa:

  const [position, setPosition] = useState(center)

  // estados del modal:

  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')
  const descriptionElementRef = useRef(null)

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
    position.formatted = direccion
    dispatch(enviarParche(
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
    handleClose()
  }

  return (
    <div>

      {/* Boton para abrir modal */}
      <BotonAbrirCrearModal handleClickOpen={handleClickOpen} />

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

          <DialogContentModal
            datePick={datePick}
            handleInputChange={handleInputChange}
            fechaParche={fechaParche}
            horaParche={horaParche}
            cupoMaximo={cupoMaximo}
            fechaFin={fechaFin}
            horaFin={horaFin}
            categoria={categoria}
            descripcionParche={descripcionParche}
            busquedaMapa={busquedaMapa}
            setPosition={setPosition}
            position={position}
            direccion={direccion}
            reset={reset}
            scroll={scroll}
          />

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
