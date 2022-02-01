import React, { useState } from "react";
import { app } from "../../services/firebase";
import "firebase/firestore";
import "firebase/auth";
import axios from 'axios'
import { inicioSesion } from "../../redux/actions/registro/registroActions";
import { useDispatch } from "react-redux";
import { styles } from '../../utils/registro/styles'

const URL_API = 'http://localhost:8080' //Cambiar por la del back

const InicioSesion = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch()

  const handleIngreso = async (event) => {
    
    event.preventDefault();
    var respuesta
    //TODO: Redireccionar a la página nueva
    const auth = app.auth();
    const user = await auth.signInWithEmailAndPassword(email, password)
      .then((userResponse) => userResponse.user)
    
    try{
      respuesta = await axios.get(`${URL_API}/inicioSesion/${user.uid}`)
      .then(data => data.data)
      dispatch(inicioSesion(respuesta.uid,
        respuesta.email, respuesta.nombres, respuesta.imagenUrl))
    } catch(e){
      respuesta = 'error'
    }
    return respuesta
  };

  return (
    <div className="text-center">
      <h1 style={{fontSize: '130%', marginBottom: '5px'}} >Inicio Sesion</h1>
      <form action="submit">
        <input
          type="text"
          id="emailIngreso"
          placeholder="Email"
          style={styles.input}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          id="claveIngreso"
          placeholder="Contraseña"
          style={styles.input}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <button style={styles.button} onClick={handleIngreso}>Ingresar</button>
      </form>
    </div>
  );
};

export default InicioSesion;
