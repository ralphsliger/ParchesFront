import axios from 'axios'
import { MisParchesLoadSuccess, MisParchesLoadError, MisParchesLoading } from '../actions/MisParchesActions'

const getMisParches = (id) => async (dispatch) => {
  const options = { method: 'GET', url: `http://localhost:8080/${id}/misParches` }

  dispatch(MisParchesLoading())

  axios.request(options).then(function (response) {
    dispatch(MisParchesLoadSuccess(response.data))
  }).catch(function (error) {
    dispatch(MisParchesLoadError(error))
  })
}

export default getMisParches
