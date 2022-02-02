import authTypes from './actionsTypes/authTypes'

export const cerrarSesion = () => ({
  type: authTypes.CERRAR_SESION
})

export const sesionIniciada = (email, uid, imagenUrl, nombres) => ({
  type: authTypes.SESION_INICIADA,
  payload: { email, uid, imagenUrl, nombres }
})
