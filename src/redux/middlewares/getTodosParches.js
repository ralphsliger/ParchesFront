import axios from 'axios'
import { ListaParchesLoadSuccess, ListaParchesLoadError, ListaParchesLoading } from '../actions/ListarParchesActions'

const getTodosParches = () => async (dispatch) => {
  dispatch(ListaParchesLoading())

  const options = { method: 'GET', url: 'http://localhost:8080/api/parches' }
  axios.request(options)
    .then(function (response) {
      dispatch(ListaParchesLoadSuccess(response.data))
    })
    .catch(function (error) {
      dispatch(ListaParchesLoadError(error))
    })
}

export default getTodosParches
