import authTypes from '../actions/actionsTypes/authTypes'

const initialState = {
  email: null,
  uid: null,
  imagenUrl: null,
  nombres: null,
  id: null
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
        id: payload.id
      }
    default:
      return state
  }
}
