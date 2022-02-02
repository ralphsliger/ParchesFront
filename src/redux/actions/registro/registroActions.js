import { INICIO_SESION, NUEVO_REGISTRO, REGISTRO_FALLIDO } from './registroActionTypes'

// TODO: Cambiar la ruta de la imagen predefinida
export const registroExitoso = (uid, email, nombre) => {
  return {
    type: NUEVO_REGISTRO,
    payload: {
      uid: uid,
      nombres: nombre,
      email: email,
      imagenUrl: 'https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/pngwing.com.png?alt=media&token=ae687cb3-1160-4aa6-909c-a4e320f0a1c6'
    }
  }
}

// Tal vez enviar un mensaje registroFallido = (msg) => {//code}
export const registroFallido = (msg) => {
  return {
    type: REGISTRO_FALLIDO,
    payload: {
      error: msg
    }
  }
}

export const inicioSesion = (uid, email, nombre, imagenUrl) => {
  return {
    type: INICIO_SESION,
    payload: {
      uid: uid,
      nombres: nombre,
      email: email,
      imagenUrl: imagenUrl
    }
  }
}
