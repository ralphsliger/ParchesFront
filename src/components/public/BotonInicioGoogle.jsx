import { Button } from "@mui/material";
import React, {useEffect} from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { iniciarSesion } from "./../../redux/actions/AuthActions";
import { useDispatch } from "react-redux";
import { google } from "../../services/firebase";
import { app } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


//const auth = app.auth();

export default function BotonInicioGoogle() {
  /*const dispatch = useDispatch();
  const [usuario] = useAuthState(auth);

  // function IniciarSesion(email, uid) {
  //   const iniciarSesionConGoogle = () => {
  //     auth.signInWithPopup(google);
  //     dispatch(iniciarSesion(email, uid));
  //   };
  // }

  useEffect(() => {
    app.auth().onAuthStateChanged((usuario) => {
      if (usuario) {
        dispatch(getUser(usuario.multiFactor.user.uid));
      } else {
        navigate("/");
      }
    });
  }, []);*/

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GoogleIcon />}
    >
      Iniciar Sesión con google
    </Button>
  );
}
