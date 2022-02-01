import axios from 'axios'
import { sesionIniciada } from './../actions/authActions';

export const crearUsuario = (uid, email, nombres, imagenUrl) => async(dispatch) =>{

    const options = {
      method: 'POST',
      url: `http://localhost:8080/crearUsuario`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        uid: uid,
        nombres: nombres,
        email: email,
        imagenUrl: imagenUrl
      }
    }
  
    axios.request(options).then(function (response) {
      dispatch(sesionIniciada(response.data.email, response.data.uid, response.data.imageUrl, response.data.nombres))
    }).catch(function (error) {
      console.error(error);
    })
}