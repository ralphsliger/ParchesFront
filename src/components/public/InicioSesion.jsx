import React, { useState } from "react";
import { app } from "../../services/firebase";
import "firebase/firestore";
import "firebase/auth";
import axios from 'axios'
import { inicioSesion } from "../../redux/actions/registro/registroActions";
import { useDispatch } from "react-redux";
import { styles } from '../../utils/registro/styles'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const URL_API = 'http://localhost:8080' //Cambiar por la del back

const InicioSesion = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleIngreso = async (event) => {
    
    event.preventDefault();
    var respuesta
    //TODO: Redireccionar a la página nueva
    const auth = app.auth();
    
    try{
      const user = await auth.signInWithEmailAndPassword(email, password)
        .then((userResponse) => userResponse.user)
      respuesta = await axios.get(`${URL_API}/inicioSesion/${user.uid}`)
      .then(data => data.data)
      dispatch(inicioSesion(respuesta.uid,
        respuesta.email, respuesta.nombres, respuesta.imagenUrl))
        navigate("/private");
      } catch(e){
        respuesta = 'error'
        console.log(e.message)
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Correo y/o contraseña incorrecta',
        })
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
          minLength={6}
          maxLength={20}
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
