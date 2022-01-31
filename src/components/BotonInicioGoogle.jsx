import { Button } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

export default function BotonInicioGoogle () {
  return <Button variant='contained' color='primary' startIcon={<GoogleIcon />}>Iniciar Sesión con google</Button>
}
