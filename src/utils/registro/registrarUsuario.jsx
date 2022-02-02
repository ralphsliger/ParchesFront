import { app } from '../../services/firebase';
import "firebase/firestore";
import "firebase/auth";
import axios from 'axios'
import { API_URL } from '../Conexion'


export async function registrarUsuario(correo, password, nombre){
    
    const auth = app.auth();
    let respuesta = null

    try {
        const user = await auth.createUserWithEmailAndPassword(correo, password)
        .then((usuarioFirebase) => usuarioFirebase.user);
    
        respuesta = await axios.post(`${API_URL}/crearUsuario`, {
            uid: user.uid,
            nombres:  nombre,
            email: correo,
            imagenUrl: "imagen"
        }).catch((error) => error)
    } catch (error) {
        respuesta = 'El email ya se encuentra registrado.'
    }
    return respuesta
}
