import axios from 'axios'
import { getUnParche } from './getUnParche'
import { API_URL } from '../../utils/Conexion'

export const postInscripcion = (usuarioId, parcheId) => (dispatch) => {
  const options = {
    method: 'POST',
    url: `${API_URL}crear-inscripcion/${parcheId}/${usuarioId}`,
    headers: { 'Content-Type': 'application/json' }
  }

  axios.request(options).then(function (response) {
    dispatch(getUnParche(parcheId, usuarioId))
  }).catch(function (error) {
    console.error(error)
  })
}
