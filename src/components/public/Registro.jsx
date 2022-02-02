import React, { useState, useEffect } from "react";
import { registrarUsuario } from "../../utils/registro/registrarUsuario";
import { useSelector, useDispatch } from "react-redux";
import {
  registroFallido,
  registroExitoso,
} from "../../redux/actions/registro/registroActions";
import { styles } from "../../utils/registro/styles";
import { useNavigate } from "react-router-dom";
import BotonInicioGoogle from "./BotonRegistroGoogle";
import Container from "@mui/material/Container";
import { Avatar } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";

const Registro = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.registro.error);

  const navigate = useNavigate();

  const [state, setState] = useState({
    nombre: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    let expRegEmail = new RegExp("^[^@]+@[^@]+\\.[a-zA-Z]{2,}$");
    let result = expRegEmail.test(state.email);
    if (!result) {
      dispatch(
        registroFallido(
          "El email debe tener la siguiente estructura: correo@email.com"
        )
      );
    } else {
      const usuario = await registrarUsuario(
        state.email,
        state.password,
        state.nombre
      );
      console.log(usuario);
      if (typeof usuario === "object") {
        dispatch(registroExitoso(usuario.data.uid, state.email, state.nombre));
        navigate("/private");
      } else {
        dispatch(registroFallido(usuario));
      }
    }
  };

  useEffect(() => {}, [dispatch, error]);

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
        <Avatar sx={{ m: 1, bgcolor: "primary" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h2" variant="h6">
          Registro
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            type="text"
            id="emailIngreso"
            label="Email"
            autoComplete="email"
            sx={{ mt: 1, mb: 2 }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="text"
            id="nombre"
            onChange={(e) => {
              setState({ ...state, nombre: e.target.value });
            }}
            placeholder="Nombre"
            maxLength={50}
            required={true}
            autoComplete="on"
          />
          <br />
          <input
            style={styles.input}
            type="email"
            id="email"
            placeholder="correo@email.com"
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
            required={true}
            autoComplete="on"
          />
          <br />
          <input
            style={styles.input}
            type="password"
            id="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
            maxLength={20}
            minLength={6}
            required={true}
          />
          <br />
          <input
            style={styles.input}
            type="password"
            id="confPassword"
            placeholder="Verificar Contraseña"
            onChange={(e) => {
              setState({ ...state, confPassword: e.target.value });
            }}
            required={true}
          />
          <br />
          <button style={styles.button} type="submit">
            Crear Cuenta
          </button>
          <BotonInicioGoogle />
        </Box>
        {error !== null ? <span>{error}</span> : null}
      </Box>
    </Container>
  );
};

export default Registro;
