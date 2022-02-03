import React, { useState } from 'react'
import { app } from '../../services/firebase'
import 'firebase/firestore'
import 'firebase/auth'
import axios from 'axios'
import { inicioSesion } from '../../redux/actions/registro/registroActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BotonIniciarGoogle from '../../components/public/BotonIniciarGoogle'
import { Button, Typography, TextField, Avatar, CssBaseline, Link } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Container from '@mui/material/Container'
import { LockOutlined } from '@mui/icons-material'
import { Box } from '@mui/system'
import { API_URL } from '../../utils/Conexion'

const InicioSesion = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleIngreso = async (event) => {
    event.preventDefault()
    let respuesta
    // TODO: Redireccionar a la página nueva
    const auth = app.auth()

    try {
      const user = await auth
        .signInWithEmailAndPassword(email, password)
        .then((userResponse) => userResponse.user)
      respuesta = await axios
        .get(`${API_URL}/inicioSesion/${user.uid}`)
        .then((data) => data.data)
      dispatch(
        inicioSesion(
          respuesta.uid,
          respuesta.email,
          respuesta.nombres,
          respuesta.imagenUrl
        )
      )
      navigate('/private')
    } catch (e) {
      respuesta = 'error'
      toast.error('Correo y/o contraseña invalidos', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    return respuesta
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
          <LockOutlined />
        </Avatar>
        <Typography component='h2' variant='h6'>
          Inicio de Sesión
        </Typography>
        <Box component='form' sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            type='text'
            id='emailIngreso'
            label='Email'
            autoComplete='email'
            sx={{ mt: 1, mb: 2 }}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <TextField
            required
            fullWidth
            type='password'
            id='claveIngreso'
            label='Contraseña'
            inputProps={{ maxLength: 20, minLength: 6, required: true }}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <Button
            type='button'
            color='primary'
            fullWidth
            variant='contained'
            onClick={handleIngreso}
            activestyle={{ background: 'red', color: 'white' }}
            isactive={(email && password) ? 'true' : 'false'}
            disabled={!((email && password))}
            sx={{ mt: 3, mb: 1, '&:hover': { backgroundColor: '#f58442ff' } }}
          >
            Ingresar
          </Button>
          <BotonIniciarGoogle />
          <Box sx={{ mt: 2 }}>
            <Link href='crear-cuenta' variant='body2'>
              ¿No tienes cuenta? crea una...
            </Link>
          </Box>
        </Box>
      </Box>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </Container>
  )
}

export default InicioSesion
