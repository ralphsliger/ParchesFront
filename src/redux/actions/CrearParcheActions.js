import actionsTypesCrearParche from './actionsTypes/ActionsTypeCrearParche'
import axios from 'axios'
import { API_URL } from '../../utils/Conexion'
import { getMisParches } from '../middlewares/getMisParches'
import { toast } from 'react-toastify'
const URL_API_POST = `${API_URL}parches/crear`
const URL_API_REVERSE = 'https://api.geoapify.com/v1/geocode/reverse'
const API_KEY_REVERSE = '1b48259b810e48ddb151889f9ea58db0'

export const getDireccion = (position) => {
  return dispatch => {
    const direccion = {
      method: 'GET',
      url: URL_API_REVERSE,
      params: {
        lat: position.lat,
        lon: position.lng,
        format: 'json',
        apiKey: API_KEY_REVERSE
      },
      headers: { 'Content-Type': 'application/json' }
    }

    axios.request(direccion).then(function (response) {
      dispatch(crearParcheLoading())
      dispatch(actualizaDireccion(response.data.results[0].formatted))
    }).catch(function (error) {
      dispatch(crearParcheError(error))
    })
  }
}

export function enviarParche (uId,
  nombreParche,
  fechaParche,
  horaParche,
  fechaFin,
  horaFin,
  descripcionParche,
  categoria,
  cupoMaximo,
  position,
  navigate) {
  // Body JSON para enviar al POST en backend
  const parche = {
    duenoDelParche: uId,
    nombreParche: nombreParche,
    descripcion: descripcionParche,
    fechaInicio: `${fechaParche}T${horaParche}:00.00`,
    fechaFin: `${fechaFin}T${horaFin}:00.00`,
    estado: 'HABILITADO',
    categoria: categoria,
    capacidadMaxima: cupoMaximo,
    ubicacionParche: position
  }
  // Peticion de envio al servidor:
  return dispatch => {
    axios.post(URL_API_POST, parche)
      .then(function (response) {
        dispatch(crearParche(response.data))
        dispatch(getMisParches(parche.duenoDelParche))
        navigate('/private/mis-parches')
        toast.success(' Parche Creado', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
      .catch(function (error) {
        dispatch(crearParcheError(error))
        toast.error('Error', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
  }
}

export const actualizaDireccion = (direccion) => {
  return {
    type: actionsTypesCrearParche.LOAD_ACTUALIZAR_DIRECCION,
    payload: direccion
  }
}

export const crearParche = (parche) => {
  return {
    type: actionsTypesCrearParche.LOAD_SUCCESS_CREAR_PARCHE,
    payload: parche
  }
}

export const crearParcheError = (error) => {
  return {
    type: actionsTypesCrearParche.LOAD_FAILURE_CREAR_PARCHE,
    payload: error
  }
}

export const crearParcheLoading = () => {
  return {
    type: actionsTypesCrearParche.LOADING_CREAR_PARCHE
  }
}
