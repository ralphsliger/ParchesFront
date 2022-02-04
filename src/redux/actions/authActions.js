import authTypes from './actionsTypes/authTypes'

export const cerrarSesion = () => ({
  type: authTypes.CERRAR_SESION
})

export const sesionIniciada = (email, uid, imagenUrl, nombres, id) => ({
  type: authTypes.SESION_INICIADA,
  payload: { email, uid, imagenUrl, nombres, id }
})

export const errorInicioSesion = () => ({
  type: authTypes.ERROR_INICIAR_SESION,
  payload: {error}
})

export const exitoInicioSesion = (error) => ({
  type: authTypes.EXITO_INICIO_SESION,
  payload: {error}
})