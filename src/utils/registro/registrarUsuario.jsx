import { app } from '../../services/firebase';
import "firebase/firestore";
import "firebase/auth";

import axios from 'axios'
//import { useDispatch } from 'react-redux';
//import { registroExitoso, registroFallido } from '../../redux/actions/registro/registroActions';


const URL_API = 'http://localhost:8080' //TODO:actualizar esto

export async function registrarUsuario(correo, password, nombre){

    const foto = "https://raw.githubusercontent.com/dayromartinez/spring-webflux-react-firebase-heroku/master/web/src/imagenes/image_perfil_defecto.png";
    
    //const dispatch = useDispatch();
    const auth = app.auth();
    let respuesta = null

    try {
        const user = await auth.createUserWithEmailAndPassword(correo, password)
        .then((usuarioFirebase) => usuarioFirebase.user);
        console.log(user);
    
        respuesta = await axios.post(`${URL_API}/crearUsuario`, {
            uid: user.uid,
            nombres:  nombre,
            email: correo,
            imagenUrl: "imagen"
        }).catch((error) => error)
        respuesta.firebase = user
        console.log(respuesta)
    } catch (error) {
        //dispatch(registroFallido(error))
        respuesta = 'error'
        console.log(error)
    }
    return respuesta
}