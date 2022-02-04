import axios from 'axios'
import { parcheBorrado, parcheBorradoError, parcheBorradoLoading } from '../actions/EliminarParcheActions'
import { API_URL } from '../../utils/Conexion'
import { getMisParches } from './getMisParches'
import { toast } from 'react-toastify'

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
    toast.success(' Parche Eliminado', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }).catch(function (error) {
    dispatch(parcheBorradoError(error.message))
    toast.error('Error', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  })
}
