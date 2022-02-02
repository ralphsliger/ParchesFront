import {INICIO_SESION, NUEVO_REGISTRO, REGISTRO_FALLIDO} from "./registroActionTypes"

//TODO: Cambiar la ruta de la imagen predefinida
export const registroExitoso = (uid, email, nombre) => {
    return {
        type:NUEVO_REGISTRO,
        payload: {
            uid: uid,
            nombres: nombre,
            email: email,
            imagenUrl: "imagen"
        }
    }
}

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
        type:INICIO_SESION,
        payload: {
            uid: uid,
            nombres: nombre,
            email: email,
            imagenUrl: imagenUrl
        }
    }
}