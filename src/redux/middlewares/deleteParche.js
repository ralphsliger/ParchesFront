import axios from 'axios'
import { parcheBorrado, parcheBorradoError, parcheBorradoLoading } from '../actions/EliminarParcheActions'
import { API_URL } from '../../utils/Conexion'
import { getMisParches } from './getMisParches'

const API_URL_DELETE = `${API_URL}parches/eliminar/`
export const deleteParche = (id, uid) => (dispatch) => {
  dispatch(parcheBorradoLoading())

  const options = {
    method: 'DELETE',
    url: API_URL_DELETE + id,
    headers: { 'Content-Type': 'application/json' }
  }

  axios.request(options).then(function (response) {
    dispatch(parcheBorrado(response.data))
    dispatch(getMisParches(uid))
  }).catch(function (error) {
    dispatch(parcheBorradoError(error.message))
  })
}
