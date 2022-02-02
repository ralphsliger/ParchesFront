import React, { useState, useEffect } from "react";
import { registrarUsuario } from "../../utils/registro/registrarUsuario";
import { useSelector, useDispatch } from "react-redux";
import {
  registroFallido,
  registroExitoso,
} from "../../redux/actions/registro/registroActions";
import { useNavigate } from "react-router-dom";
import BotonInicioGoogle from "./BotonRegistroGoogle";
import Container from "@mui/material/Container";
import { Avatar, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { validaciones } from "../../utils/registro/validaciones";

const Registro = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.registro.error);

  const navigate = useNavigate()

  const [state, setState] = useState({
    nombre: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(state)

    let validacion = validaciones(state.nombre,state.email,
      state.password, state.confPassword)

    if (typeof validacion === "string") {
      dispatch(registroFallido(validacion));
    } else {
      const usuario = await registrarUsuario(
        state.email,
        state.password,
        state.nombre
      );
      if (typeof usuario === "object") {
        dispatch(registroExitoso(usuario.data.uid, state.email, state.nombre));
        navigate("/private");
      } else {
        dispatch(registroFallido(usuario));
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary" }}></Avatar>
        <Typography component="h2" variant="h6">
          Registro
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            type="text"
            id="nombreIngreso"
            label="Nombre"
            sx={{ mt: 1, mb: 1 }}
            onChange={(event) => {
              setState({...state, nombre: event.target.value});
            }}
          />
          <TextField
            type="email"
            id="email"
            label="correo@email.com"
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
            required
            fullWidth
            sx={{ mt: 1, mb: 1 }}
          />
          <TextField
            type="password"
            id="password"
            label="Contraseña"
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
            maxLength={20}
            minLength={6}
            required
            fullWidth
            sx={{ mt: 1, mb: 1 }}
          />
          <TextField
            type="password"
            id="confPassword"
            label="Confirmar Contraseña"
            onChange={(e) => {
              setState({ ...state, confPassword: e.target.value });
            }}
            required
            fullWidth
            sx={{ mt: 1, mb: 1 }}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 1, "&:hover": { backgroundColor: "#f58442ff" } }}
            onClick={onSubmit}
          >
            Crear Cuenta
          </Button>
          <BotonInicioGoogle />
        </Box>
        {error !== null ? <span>{error}</span> : null}
      </Box>
    </Container>
  );
};

export default Registro;
