import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { google, app } from "../../services/firebase";
import { obtenerUsuario } from "../../redux/middlewares/obtenerUsuario";
import useStyles from "../../utils/materialStyles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function BotonInicioGoogle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const authState = useSelector((state) => state.auth);
  const error = authState.error;

  const IniciarSesion = () => {
    app
      .auth()
      .signInWithPopup(google)
      .then((user) => {
        console.log(user.user.multiFactor.user.email);
        dispatch(obtenerUsuario(user.user.multiFactor.user.uid));
        console.log(authState.error);
        if (!authState.error && authState.error !== null)
          navigate("/private/inicio");
      })
      .catch((error) => {
        console.log(error);
        // navigate('crear-cuenta')
      });
  };
  useEffect(() => {
    if (error === false) {
      navigate("/private/inicio");
    }
  }, [error]);

  return (
    <Button
      className={classes.root}
      variant="contained"
      color="primary"
      startIcon={<GoogleIcon />}
      onClick={IniciarSesion}
      fullWidth
    >
      Ingresar con google
    </Button>
  );
}
