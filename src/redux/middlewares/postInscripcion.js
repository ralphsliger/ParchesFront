import axios from 'axios'
import { unParcheLoadSuccess, unParcheLoadError, unParcheLoading } from '../actions/UnParcheActions'
import { API_URL } from '../../utils/Conexion'

export const postInscripcion = (usuarioId, parcheId) => (dispatch) => {
  dispatch(unParcheLoading())

  const options = {
    method: 'POST',
    url: `${API_URL}/crear-inscripcion/${parcheId}/${usuarioId}`,
    headers: { 'Content-Type': 'application/json' },
    data: { usuarioId: usuarioId, parcheId: parcheId }
  }

  axios.request(options).then(function (response) {
    dispatch(unParcheLoadSuccess(response.data))
    console.log(response.data)
  }).catch(function (error) {
    dispatch(unParcheLoadError(error.message))
    console.error(error)
  })
}
