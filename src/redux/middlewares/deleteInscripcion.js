/* import axios from 'axios'
import { unParcheLoadSuccess, unParcheLoadError, unParcheLoading } from '../actions/UnParcheActions'
import { API_URL } from '../../utils/Conexion'

export const deleteInscripcion = (id) => (dispatch) => {
  dispatch(unParcheLoading())

  const options = {
    method: 'DELETE',
    url: `${API_URL}/desincribirse/${id}`
  }

  axios.request(options).then(function (response) {
    dispatch(unParcheLoadSuccess(response.data))
    console.log(response.data)
  }).catch(function (error) {
    dispatch(unParcheLoadError(error.message))
    console.error(error)
  })
} */
