import { Button } from '@mui/material'
import { useEffect } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import { useDispatch } from 'react-redux'
import { google, app } from '../../services/firebase'

import { obtenerUsuario } from '../../redux/middlewares/obtenerUsuario'
import useStyles from '../../utils/materialStyles'
import { useNavigate } from 'react-router-dom'

export default function BotonInicioGoogle () {
  const auth = app.auth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const classes = useStyles()

  function IniciarSesion () {
    auth.signInWithPopup(google)
      .then(user => {
        dispatch(obtenerUsuario(user.user.multiFactor.user.uid))
        navigate('/private/inicio')
      }).catch(error => {
        console.log(error)
      })
  }

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
