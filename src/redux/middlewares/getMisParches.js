
import axios from 'axios'
import {
  misParchesLoadSuccess,
  misParchesLoadError,
  misParchesLoading
} from '../actions/misParchesActions'
import { API_URL } from '../../utils/Conexion'

export const getMisParches =
  (uid) =>
    (dispatch) => {
      dispatch(misParchesLoading())

      const options = {
        method: 'GET',
        // url: `${API_URL}/detalle-parche/${id}/${usuarioId}`,
        url: `${API_URL}${uid}/misParches`,
        headers: { 'Content-Type': 'application/json' }
      }

      axios
        .request(options)
        .then(function (response) {
          dispatch(misParchesLoadSuccess(response.data))
        })
        .catch(function (error) {
          dispatch(misParchesLoadError(error.message))
        })
    }
