import axios from 'axios'
import { iniciarSesion } from './../actions/AuthActions';
import { sesionIniciada } from './../actions/authActions';

export const obtenerUsuario = (uid) => async(dispatch) =>{

    const options = {
      method: 'GET',
      url: `http://localhost:8080/inicioSesion/${uid}`,
      headers: { 'Content-Type': 'application/json' }
    }
  
    axios.request(options).then(function (response) {
      dispatch(iniciarSesion(response.data.email, response.data.uid, response.data.imageUrl, response.data.nombres))
    }).catch(function (error) {
      console.error(error);
    })
}