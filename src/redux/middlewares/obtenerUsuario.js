import axios from 'axios'
import { sesionIniciada, errorInicioSesion, exitoInicioSesion } from '../actions/authActions'
import { API_URL } from '../../utils/Conexion'

export const obtenerUsuario = (uid) => async (dispatch) => {


  const options = {
    method: 'GET',
    url: `${API_URL}/inicioSesion/${uid}`,
    headers: { 'Content-Type': 'application/json' }
  }

  axios.request(options).then(function (response) {
    dispatch(sesionIniciada(response.data.email, response.data.uid, response.data.imagenUrl, response.data.nombres, response.data.id))
    dispatch(exitoInicioSesion(false));

    console.log('en el axios', response.data);

    //navigate('/private/inicio')
  }).catch(function (error) {
    console.error("Cuenta no creada", error)
      if (error.response.status === 401) {
        console.log('Entro al navigate');
        dispatch(errorInicioSesion(true));
        //navigate('crear-cuenta');
      }
  })
}
