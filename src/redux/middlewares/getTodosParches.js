import axios from 'axios'
import { ListaParchesLoadSuccess, ListaParchesLoadError, ListaParchesLoading } from '../actions/ListarParchesActions'
import { API_URL } from '../../utils/Conexion'

const getTodosParches = () => async (dispatch) => {
  dispatch(ListaParchesLoading())

  const options = { method: 'GET', url: `${API_URL}/parches` }
  axios.request(options)
    .then(function (response) {
      dispatch(ListaParchesLoadSuccess(response.data))
    })
    .catch(function (error) {
      dispatch(ListaParchesLoadError(error))
    })
}

export default getTodosParches
