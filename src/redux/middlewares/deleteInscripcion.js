import axios from 'axios'
import { API_URL } from '../../utils/Conexion'
import { getUnParche } from './getUnParche'

export const deleteInscripcion = (id, usuarioId, parcheId) => (dispatch) => {
  const options = {
    method: 'DELETE',
    url: `${API_URL}cancelar-inscripcion/${id}`
  }

  axios.request(options).then(function (response) {
    dispatch(getUnParche(parcheId, usuarioId))
  }).catch(function (error) {
    console.error(error)
  })
}
