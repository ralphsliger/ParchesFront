import React, { useState } from "react";
import { app } from "../../services/firebase";
import "firebase/firestore";
import "firebase/auth";
import axios from 'axios'
import { inicioSesion } from "../../redux/actions/registro/registroActions";
import { useDispatch } from "react-redux";
import { styles } from '../../utils/registro/styles'
import { useNavigate } from "react-router-dom";
import BotonInicioGoogle from "./BotonRegistroGoogle";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";

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
    const user = await auth.signInWithEmailAndPassword(email, password)
      .then((userResponse) => userResponse.user)
    
    try{
      respuesta = await axios.get(`${URL_API}/inicioSesion/${user.uid}`)
      .then(data => data.data)
      dispatch(inicioSesion(respuesta.uid,
        respuesta.email, respuesta.nombres, respuesta.imagenUrl))
        navigate("/private");
      } catch(e){
      respuesta = 'error'
    }
    return respuesta
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box sx={{ margintoop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}></Box>
      <Typography variant='h6'>
        Inicio Sesión
      </Typography>
      <form action="submit">
        <TextField
          required
          variant="standard"
          type="text"
          id="emailIngreso"
          label="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          required
          variant="standard"
          type="password"
          id="claveIngreso"
          label="Contraseña"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button color="primary" onClick={handleIngreso}>
          Ingresar
        </Button>
      </form>
      <BotonInicioGoogle />
    </div>
  );
};

export default InicioSesion;
