import axios from 'axios'
import { unParcheLoadSuccess, unParcheLoadError, unParcheLoading } from '../actions/UnParcheActions'
import { API_URL } from '../../utils/Conexion'

export const getUnParche = (id, usuarioId) => (dispatch) => {
  dispatch(unParcheLoading())

  const options = {
    method: 'GET',
    url: `${API_URL}detalle-parche/${id}/${usuarioId}`,
    headers: { 'Content-Type': 'application/json' }
  }

  axios.request(options).then(function (response) {
    dispatch(unParcheLoadSuccess(response.data))
  }).catch(function (error) {
    dispatch(unParcheLoadError(error.message))
  })
}
