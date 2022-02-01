import axios from 'axios'
import { sesionIniciada } from './../actions/AuthActions'

export const obtenerUsuario = (uid) => async (dispatch) => {
  const options = {
    method: 'GET',
    url: `http://localhost:8080/inicioSesion/${uid}`,
    headers: { 'Content-Type': 'application/json' }
  }

  axios.request(options).then(function (response) {
    dispatch(sesionIniciada(response.data.email, response.data.uid, response.data.imageUrl, response.data.nombres))
  }).catch(function (error) {
    console.error(error)
  })
}
