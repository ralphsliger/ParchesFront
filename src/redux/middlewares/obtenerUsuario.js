import axios from 'axios'
import { iniciarSesion } from './../actions/AuthActions';
import { sesionIniciada } from './../actions/authActions';

export const obtenerUsuario = (uid) => async(dispatch){

    const options = {
      method: 'GET',
      url: `${API_URL}/user/${uid}`,
      headers: { 'Content-Type': 'application/json' }
    }
  
    axios.request(options).then(function (response) {

      dispatch(sesionIniciada(response.data.email, response.data.uid, response.data.imageUrl, response.data.nombres))
    }).catch(function (error) {
      console.error(error);
    })
}