import authTypes from '../actions/actionsTypes/authTypes'

const initialState = {
  email: null,
  uid: null,
  imagenUrl: null,
  nombres: null,
  id: null,
  error: null
}

export default function authReducer (state = initialState, action) {
  const payload = action.payload

  switch (action.type) {
    case authTypes.INICIAR_SESION:
      return {
        ...state,
        email: payload.email,
        uid: payload.uid,
        imagenUrl: payload.imagenUrl,
        nombres: payload.nombres,
        id: payload.id
      }
    case authTypes.CERRAR_SESION:
      return initialState
    case authTypes.SESION_INICIADA:
      return {
        ...state,
        email: payload.email,
        uid: payload.uid,
        imagenUrl: payload.imagenUrl,
        nombres: payload.nombres,
        id: payload.id,
        error: false
      }
    case authTypes.ERROR_INICIAR_SESION:
      console.log('entro al error')
      return {
        ...state,
        error: payload.error
      }
    case authTypes.EXITO_INICIO_SESION:
      return {
        ...state,
        error: payload.error
      }
    default:
      return state
  }
}
