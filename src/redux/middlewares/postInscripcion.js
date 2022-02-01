import axios from 'axios'
import { unParcheLoadSuccess, unParcheLoadError, unParcheLoading } from '../actions/UnParcheActions'
import { API_URL } from '../../utils/Conexion'

export const postInscripcion = (userId, parcheid) => (dispatch) => {
  dispatch(unParcheLoading())

  const options = {
    method: 'POST',
    url: `${API_URL}/incribirse/`,
    headers: { 'Content-Type': 'application/json' },
    data: { userId: userId, parcheid: parcheid }
  }

  axios.request(options).then(function (response) {
    dispatch(unParcheLoadSuccess(response.data))
    console.log(response.data)
  }).catch(function (error) {
    dispatch(unParcheLoadError(error.message))
    console.error(error)
  })
}
