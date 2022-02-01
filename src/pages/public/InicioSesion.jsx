import React, { useState } from "react";
import { app } from "../../services/firebase";
import "firebase/firestore";
import "firebase/auth";
import axios from 'axios'
import { inicioSesion } from "../../redux/actions/registro/registroActions";
import { useDispatch } from "react-redux";

const URL_API = 'http://localhost:8080' //Cambiar por la del back

const InicioSesion = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch()

  const handleIngreso = async (event) => {
    event.preventDefault();

    var respuesta
    //TODO: Firebase manejar el ingreso y redireccionar
    const auth = app.auth();
    const user = await auth
      .signInWithEmailAndPassword(email, password)
      .then((userResponse) => userResponse.user)
    console.log(user)
    try{
      respuesta = await axios.get(`${URL_API}/inicioSesion/${user.uid}`)
      .then(data => data.data)
      dispatch(inicioSesion(respuesta.uid,
        respuesta.email, respuesta.nombres, respuesta.imagenUrl))
    } catch(e){
      respuesta = 'error'
      console.log(e.message)
    }
    return respuesta
  };

  return (
    <div>
      <form action="submit">
        <input
          type="text"
          id="emailIngreso"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          id="claveIngreso"
          placeholder="Contraseña"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={handleIngreso}>Ingresar</button>
      </form>
    </div>
  );
};

export default InicioSesion;
