import React, { useEffect, useState } from 'react'
import { registrarUsuario } from '../../utils/registro/registrarUsuario'
import { useSelector, useDispatch } from 'react-redux'
import {
  registroFallido,
  registroExitoso,
  sanearEstado
} from '../../redux/actions/registro/registroActions'
import { useNavigate } from 'react-router-dom'
import BotonRegistroGoogle from '../../components/public/BotonRegistroGoogle'
import Container from '@mui/material/Container'
import { Avatar, Button, CssBaseline, Typography, TextField } from '@mui/material'

import { Box } from '@mui/system'

import { validaciones } from '../../utils/registro/validaciones'

const Registro = () => {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.registro.error)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(sanearEstado())
  }, [navigate])

  const [state, setState] = useState({
    nombre: '',
    email: '',
    password: '',
    confPassword: ''
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    const correo = state.email.toLowerCase()
    const validacion = validaciones(state.nombre, correo,
      state.password, state.confPassword)

    if (typeof validacion === 'string') {
      dispatch(registroFallido(validacion))
    } else {
      const usuario = await registrarUsuario(
        correo,
        state.password,
        state.nombre
      )
      if (typeof usuario === 'object') {
        dispatch(registroExitoso(usuario.data.uid, usuario.data.email, usuario.data.nombres, usuario.data.imagenUrl, usuario.data.id))
        navigate('/private')
      } else {
        dispatch(registroFallido(usuario))
      }
    }
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
        <Avatar sx={{ m: 1, bgcolor: 'primary' }} />
        <Typography component='h2' variant='h6'>
          Registro
        </Typography>
        <Box component='form' sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            type='text'
            id='nombreIngreso'
            label='Nombre'
            inputProps={{ maxLength: 50 }}
            sx={{ mt: 1, mb: 1 }}
            onChange={(event) => {
              setState({ ...state, nombre: event.target.value })
            }}
          />
          <TextField
            type='email'
            id='email'
            label='correo@email.com'
            onChange={(e) => {
              setState({ ...state, email: e.target.value })
            }}
            required
            fullWidth
            sx={{ mt: 1, mb: 1 }}
          />
          <TextField
            type='password'
            id='password'
            label='Contraseña'
            onChange={(e) => {
              setState({ ...state, password: e.target.value })
            }}
            inputProps={{ maxLength: 20, minLength: 6 }}
            required
            fullWidth
            sx={{ mt: 1, mb: 1 }}
          />
          <TextField
            type='password'
            id='confPassword'
            label='Confirmar Contraseña'
            inputProps={{ maxLength: 20, minLength: 6 }}
            onChange={(e) => {
              setState({ ...state, confPassword: e.target.value })
            }}
            required
            fullWidth
            sx={{ mt: 1, mb: 1 }}
          />
          <Button
            type='button'
            fullWidth
            variant='contained'
            onClick={onSubmit}
            activestyle={{ background: 'red', color: 'white' }}
            isactive={(state.nombre && state.email && state.password && state.confPassword) ? 'true' : 'false'}
            disabled={!((state.nombre && state.email && state.password && state.confPassword))}
            sx={{ mt: 3, mb: 1, '&:hover': { backgroundColor: '#f58442ff' } }}
          >
            Crear Cuenta
          </Button>
          <BotonRegistroGoogle />
        </Box>
        {error !== null
          ? (
            <Box
              sx={{
                color: '#b71c1c',
                bgcolor: '#ef9a9a',
                p: 2,
                mt: 3,
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <span>{error}</span>
            </Box>
            )
          : (null)}
      </Box>
    </Container>
  )
}

export default Registro
