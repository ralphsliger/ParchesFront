import { useState, useEffect } from 'react'
import { useForm } from '../../../hooks/useForm'
import { actualizarParche } from '../../../redux/actions/EditarParcheAction'
import { getDireccion } from '../../../redux/actions/CrearParcheActions'
import { useDispatch, useSelector } from 'react-redux'
import DialogTittleModal from '../CrearParcheModal/DialogTittleModal'
import DialogContentModal from '../CrearParcheModal/DialogContentModal'
import { getUnParche } from '../../../redux/middlewares/getUnParche'
import { useParams } from 'react-router-dom'

const EditarParcheModal = () => {
  const { parcheId } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const { unParche } = useSelector(state => state.unParche)

  const [position, setPosition] = useState(null)

  const perfilQuemado = {
    uId: user.uid,
    fotoPerfil: user.imagenUrl,
    nombreUsuario: user.nombres
  }

  useEffect(() => {
    dispatch(getUnParche(parcheId))
    console.log('para el editar ', unParche)
  }, [])

  useEffect(() => {
    setPosition([unParche?.ubicacionParche?.lat, unParche?.ubicacionParche?.lng])
  }, [unParche])

  /* const parcheQuemado = {
    id: '61f9ae55c281fc06a82d3506',
    duenoDelParche: 'Nata8',
    nombreParche: { valorNombre: 'parche editar Nata8' },
    descripcion: { valorDescripcion: 'fghjn' },
    fechaCreacion: { valorFecha: '2022-02-01T22:49' },
    fechaInicio: { valorFecha: '2022-12-12T10:59' },
    fechaFin: { valorFecha: '2022-12-12T12:59:00' },
    estado: 'HABILITADO',
    categoria: 'MODA',
    capacidadMaxima: { valorCapacidad: 12 },
    ubicacionParche: {
      lat: 1,
      lng: 1,
      direccion: 'CIUDAD DE COLOMBIA'
    },
    cantidadParticipantes: null
  }  */

  // useForm:

  const [values, handleInputChange, reset] = useForm({
    busquedaMapa: '',
    nombreParche: unParche?.nombreParche?.valorNombre,
    fechaParche: unParche?.fechaDeInicio?.valorFecha.split('T')[0],
    horaParche: unParche?.fechaDeInicio?.valorFecha.split('T')[1],
    fechaFin: unParche?.fechaFin?.valorFecha.split('T')[0],
    horaFin: unParche?.fechaFin?.valorFecha.split('T')[1],
    descripcionParche: unParche?.descripcion?.valorDescripcion,
    categoria: unParche?.categoria,
    cupoMaximo: unParche?.capacidadMaxima?.valorCapacidad
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

  const direccion = useSelector(store => store.parcheCreado.direccion)

  // estados del mapa:

  // variable de fecha para formulario:

  const datePick = new Date().toISOString().split('T')[0]

  // efectos del modal:

  useEffect(() => {
    if (position) {
      dispatch(getDireccion(position))
    }
  }, [position])

  // handle's de formulario

  const handleEnviarFormulario = (e) => {
    e.preventDefault()
    reset()
    position.formatted = direccion
    dispatch(actualizarParche(
      unParche?.id,
      unParche?.duenoDelParche?.uid,
      nombreParche,
      descripcionParche,
      unParche.fechaDeCreacion.valorFecha,
      fechaParche,
      horaParche,
      fechaFin,
      horaFin,
      'HABILITADO',
      categoria,
      cupoMaximo,
      position
    ))
  }

  return (
    <>
      {unParche && position && (
        <div>
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
        </div>)}
    </>
  )
}

export default EditarParcheModal
