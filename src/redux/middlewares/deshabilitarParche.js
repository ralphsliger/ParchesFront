import axios from 'axios'
import { deshabilitarParche, deshabilitarParcheError, deshabilitarParcheLoading } from '../actions/DeshabilitarActions'
import { toast } from 'react-toastify'
import { API_URL } from '../../utils/Conexion'
const URL_API_PUT = `${API_URL}parches/deshabilitar`

export function deshabParche (
  id,
  uId,
  nombreParche,
  descripcionParche,
  fechaCreacion,
  fechaParche,
  fechaFin,
  estado,
  categoria,
  cupoMaximo,
  position
) {
  // Body JSON para enviar al PUT en backend
  const parche = {
    id: id,
    duenoDelParche: uId,
    nombreParche: nombreParche,
    descripcion: descripcionParche,
    fechaCreacion: fechaCreacion,
    fechaInicio: fechaParche,
    fechaFin: fechaFin,
    estado: estado,
    categoria: categoria,
    capacidadMaxima: cupoMaximo,
    ubicacionParche: position
  }

  // Peticion de envio al servidor:
  return dispatch => {
    dispatch(deshabilitarParcheLoading())
    axios.put(URL_API_PUT, parche)
      .then(function (response) {
        dispatch(deshabilitarParche(response.data))
        toast.success(' Parche Deshabilitado', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
      .catch(function (error) {
        dispatch(deshabilitarParcheError(error))
        toast.error('Error', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
  }
}
