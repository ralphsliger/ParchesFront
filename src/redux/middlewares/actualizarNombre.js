import axios from 'axios'
import { sesionIniciada } from '../actions/authActions'

export const actualizarHombre = (datos) => async (dispatch) => {
  const options = {
    method: 'PUT',
    url: 'http://localhost:8080/actualizarUsuario',
    headers: { 'Content-Type': 'application/json' },
    data: datos
  }

  axios.request(options).then(function (response) {
    dispatch(sesionIniciada(response.data.email, response.data.uid, response.data.imagenUrl, response.data.nombres, response.data.id))
  }).catch(function (error) {
    console.error(error)
    console.log("errrorr");
  })
}
