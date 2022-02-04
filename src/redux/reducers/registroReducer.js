import { NUEVO_REGISTRO, REGISTRO_FALLIDO, INICIO_SESION, SANEAR_ESTADO } from '../actions/registro/registroActionTypes'

const initialState = {
  uid: null,
  nombre: '',
  error: null,
  email: '',
  imagenUrl: ''
}

const registroReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NUEVO_REGISTRO: {
      // TODO: Validar errores email duplicado y fallo en conexion
      return {
        ...state,
        email: payload.email,
        uid: payload.uid,
        imagenUrl: payload.imagenUrl,
        nombres: payload.nombres,
        id: payload.id,
        error: null
      }
    }
    case INICIO_SESION: {
      return {
        ...state,
        email: payload.email,
        uid: payload.uid,
        imagenUrl: payload.imagenUrl,
        nombres: payload.nombres,
        id: payload.id
      }
    }
    case REGISTRO_FALLIDO: {
      return {
        ...state,
        error: payload.error
      }
    }
    case SANEAR_ESTADO:{
      return {
        ...state,
        error: null
      }
    }
    default:
      return state
  }
}

export default registroReducer
