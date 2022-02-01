import actionsTypesCrearParche from './actionsTypes/ActionsTypeCrearParche'
import axios from 'axios'

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

export function enviarDatos (nombreParche, fechaParche, horaParche, descripcionParche, position) {
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
      const parche = {
        nombreParche: nombreParche,
        fechaParche: fechaParche,
        horaParche: horaParche,
        descripcionParche: descripcionParche,
        poscicionMapa: position,
        direccion: response.data.results[0].formatted
      }
      dispatch(crearParche(parche))
    }).catch(function (error) {
      dispatch(crearParcheError(error))
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
