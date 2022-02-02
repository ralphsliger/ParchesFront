import { useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box'
import { useForm } from '../../../hooks/useForm'
import { actualizarParche } from '../../../redux/actions/EditarParcheAction'
import { getDireccion } from '../../../redux/actions/CrearParcheActions'
import { useDispatch,useSelector } from 'react-redux'
import DialogTittleModal from '../CrearParcheModal/DialogTittleModal'
import DialogContentModal from '../CrearParcheModal/DialogContentModal'

const EditarParcheModal = () => {
  const direccion = useSelector(store => store.parcheCreado.direccion)

  // perfil que vendra de firebase QUEMADO:

  const perfilQuemado = {
    uId: 'xxx-xxx-xxx-xxx',
    fotoPerfil: 'https://us.123rf.com/450wm/kritchanut/kritchanut1308/kritchanut130800012/21528485-avatar-hombre-foto-de-perfil-vector.jpg?ver=6',
    nombreUsuario: 'Anthony Colmenares Rivas'
  }

  const parcheQuemado = {
    id: "61f9ae55c281fc06a82d3506",
    duenoDelParche: "Nata8",
    nombreParche: { valorNombre: "parche editar Nata8" },
    descripcion: { valorDescripcion: "fghjn" },
    fechaCreacion: { valorFecha: "2022-02-01T22:49" },
    fechaInicio: { valorFecha: "2022-12-12T10:59" },
    fechaFin: { valorFecha: "2022-12-12T12:59:00" },
    estado: "HABILITADO",
    categoria: "MODA",
    capacidadMaxima: { valorCapacidad: 12 },
    ubicacionParche: {
      lat: 1,
      lng: 1,
      direccion: "CIUDAD DE COLOMBIA",
    },
    cantidadParticipantes: null,
  };

    // useForm:

    const [values, handleInputChange, reset] = useForm({
      busquedaMapa: "",
      nombreParche: parcheQuemado.nombreParche.valorNombre,
      fechaParche: parcheQuemado.fechaInicio.valorFecha.split('T')[0],
      horaParche: parcheQuemado.fechaInicio.valorFecha.split('T')[1],
      fechaFin: parcheQuemado.fechaFin.valorFecha.split('T')[0],
      horaFin: parcheQuemado.fechaFin.valorFecha.split('T')[1],
      descripcionParche: parcheQuemado.descripcion.valorDescripcion,
      categoria: parcheQuemado.categoria,
      cupoMaximo: parcheQuemado.capacidadMaxima.valorCapacidad,
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

  // constantes redux:

  const dispatch = useDispatch()

  // constante predefinida del mapa:

  const descriptionElementRef = useRef(null)

  // estados del mapa:

  const [position, setPosition] = useState([parcheQuemado.ubicacionParche.lat,parcheQuemado.ubicacionParche.lng])

  // variable de fecha para formulario:

  const datePick = new Date().toISOString().split('T')[0]

  // efectos del modal:

  useEffect(() => {
    dispatch(getDireccion(position))
  }, [position])
  

  // handle's de formulario

  const handleEnviarFormulario = (e) => {
    e.preventDefault()
    reset()
    position.formatted = direccion
    dispatch(actualizarParche(
      parcheQuemado.id,
      perfilQuemado.uId,
      nombreParche,
      descripcionParche,
      parcheQuemado.fechaCreacion.valorFecha,
      fechaParche,
      horaParche,
      fechaFin,
      horaFin,
      parcheQuemado.estado,
      categoria,
      cupoMaximo,
      position
    ))
  }

  return (
    <div>
      {/* Body */}
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
          />

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
