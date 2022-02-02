import axios from 'axios'
import { MisParchesLoadSuccess, MisParchesLoadError, MisParchesLoading } from '../actions/MisParchesActions'
import { API_URL } from '../../utils/Conexion'

const getMisParches = (id) => async (dispatch) => {
  const options = {
    method: 'GET',
    url: `${API_URL}/${id}/misParches`
  }

  dispatch(MisParchesLoading())

  axios.request(options).then(function (response) {
    dispatch(MisParchesLoadSuccess(response.data))
  }).catch(function (error) {
    dispatch(MisParchesLoadError(error))
  })
}

export default getMisParches
