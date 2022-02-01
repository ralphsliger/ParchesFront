import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import { useDispatch } from 'react-redux'
import { google, app } from '../../services/firebase'

import { obtenerUsuario } from '../../redux/middlewares/obtenerUsuario'
import useStyles from '../../utils/materialStyles'

export default function BotonInicioGoogle() {
  const auth = app.auth()
  const dispatch = useDispatch()

  const classes = useStyles()

  function IniciarSesion() {
    auth.signInWithPopup(google)
  }

  useEffect(() => {
    app.auth().onAuthStateChanged((usuario) => {
      if (usuario) {
        const uid = usuario.multiFactor.user.uid
        dispatch(obtenerUsuario(uid))
      }
    })
  }, [])

  return (
    <Button
      className={classes.root}
      variant='contained'
      color='primary'
      startIcon={<GoogleIcon />}
      onClick={IniciarSesion}
    >
      Ingresar con google
    </Button>
  )
}
