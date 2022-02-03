import { NUEVO_REGISTRO, REGISTRO_FALLIDO, INICIO_SESION } from '../actions/registro/registroActionTypes'

const initialState = {
  uid: null,
  nombre: '',
  error: '',
  email: '',
  imagenUrl: ''
}

const registroReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NUEVO_REGISTRO: {
      // TODO: Validar errores email duplicado y fallo en conexion
      return {
        ...state,
        uid: payload.uid,
        nombre: payload.nombres,
        email: payload.email
      }
    }
    case INICIO_SESION: {
      return {
        ...state,
        uid: payload.uid,
        nombre: payload.nombres,
        email: payload.email,
        imagenUrl: payload.imagenUrl
      }
    }
    case REGISTRO_FALLIDO: {
      return {
        ...state,
        error: payload.error
      }
    }
    default:
      return state
  }
}

export default registroReducer
