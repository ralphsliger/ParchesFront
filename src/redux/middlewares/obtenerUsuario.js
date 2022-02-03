import axios from 'axios'
import { sesionIniciada } from '../actions/authActions'
import { API_URL } from '../../utils/Conexion'

export const obtenerUsuario = (uid) => async (dispatch) => {
  const options = {
    method: 'GET',
    url: `${API_URL}inicioSesion/${uid}`,
    headers: { 'Content-Type': 'application/json' }
  }

  axios.request(options).then(function (response) {
    dispatch(sesionIniciada(response.data.email, response.data.uid, response.data.imagenUrl, response.data.nombres, response.data.id))
  }).catch(function (error) {
    console.error(error)
  })
}
