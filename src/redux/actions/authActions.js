import authTypes from './actionsTypes/AuthTypes';

export const iniciarSesion = (email, uid) => ({
  type: authTypes.INICIAR_SESION,
  payload: { email, uid }
});

export const cerrarSesion = () => ({
    type: authTypes.CERRAR_SESION,
});

export const sesionIniciada = (email, uid, imageUrl, nombres) => ({
  type: authTypes.SESION_INICIADA,
  payload: { email, uid }
})
