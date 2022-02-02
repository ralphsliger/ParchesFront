import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import { useDispatch } from 'react-redux'
import { google, app } from '../../services/firebase'

import { crearUsuario } from '../../redux/middlewares/crearUsuario'
import useStyles from '../../utils/materialStyles'
import { useNavigate } from 'react-router-dom'

export default function BotonRegistroGoogle () {
  const auth = app.auth()
  const dispatch = useDispatch()
  // const [usuario] = useAuthState(auth);

  const navigate = useNavigate()
  const classes = useStyles()

  function IniciarSesion () {
    auth.signInWithPopup(google)
      .then(user => {
        const uid = user.user.multiFactor.user.uid
        const email = user.user.multiFactor.user.email
        const nombres = user.user.multiFactor.user.displayName
        const imagenUrl = user.user.multiFactor.user.photoURL
        dispatch(crearUsuario(uid, email, nombres, imagenUrl))
        navigate('/private/inicio')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <Button
        className={classes.root}
        variant='contained'
        color='primary'
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={IniciarSesion}
      >
        Ingresar con google
      </Button>
    </>
  )
}
