import { app } from '../../services/firebase'
import 'firebase/firestore'
import 'firebase/auth'

import axios from 'axios'

const URL_API = 'http://localhost:8080' // TODO:actualizar esto

export async function registrarUsuario (correo, password, nombre) {
  const auth = app.auth()
  let respuesta = null

  try {
    const user = await auth.createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => usuarioFirebase.user)
    console.log(user.uid)
    respuesta = await axios.post(`${URL_API}/crearUsuario`, {
      uid: user.uid,
      nombres: nombre,
      email: correo,
      imagenUrl: 'imagen'
    }).catch((error) => console.log(error))
  } catch (error) {
    respuesta = 'El email ya se encuentra registrado.'
    console.log(error)
  }
  return respuesta
}
