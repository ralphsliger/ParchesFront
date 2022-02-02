import actionsTypesEditarParche from './actionsTypes/ActionsTypeEditarParche'
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
      dispatch(EditarParcheLoading())
      dispatch(actualizaDireccion(response.data.results[0].formatted))
    }).catch(function (error) {
      dispatch(EditarParcheError(error))
    })
  }
}

export function enviarDatos(nombreParche, fechaParche, horaParche, descripcionParche, position) {
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
      dispatch(EditarParcheLoading())
      const parche = {
        nombreParche: nombreParche,
        fechaParche: fechaParche,
        horaParche: horaParche,
        descripcionParche: descripcionParche,
        poscicionMapa: position,
        direccion: response.data.results[0].formatted
      }
      dispatch(EditarParche(parche))
    }).catch(function (error) {
      dispatch(EditarParcheError(error))
    })
  }
}

export const actualizaDireccion = (direccion) => {
  return {
    type: actionsTypesEditarParche.LOAD_ACTUALIZAR_DIRECCION,
    payload: direccion
  }
}

export const EditarParche = (idParche,bodyParche) => {
    return async function(dispatch) {
        return await fetch(URL + idParche + "/parche", {
            method: "PUT",
            body: JSON.stringify(bodyParche),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            dispatch({ type: LOAD_SUCCESS_EDITAR_PARCHE, payload: json })
        })  
        .catch(error => console.error('Error:', error))
    };
}

export const EditarParcheError = (error) => {
  return {
    type: actionsTypesEditarParche.LOAD_FAILURE_EDITAR_PARCHE,
    payload: error
  }
}

export const EditarParcheLoading = () => {
  return {
    type: actionsTypesEditarParche.LOADING_EDITAR_PARCHE
  }
}
