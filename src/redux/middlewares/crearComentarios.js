import axios from 'axios'
import { getUnParche } from './getUnParche'

export const crearComentario = (datos) => async (dispatch) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:8080/crearComentario',
    headers: { 'Content-Type': 'application/json' },
    data: datos
  }

  axios.request(options).then(function (response) {
    dispatch(getUnParche(response.data.parcheId, response.data.userId))
  }).catch(function (error) {
    console.error(error)
  })
}
