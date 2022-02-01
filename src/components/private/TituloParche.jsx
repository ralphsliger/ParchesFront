import React from 'react'
import { Typography } from '@mui/material'

export default function TituloParche() {
  return (
    <Typography
      letterSpacing={3}
      textAlign='center'
      id='texto-titulo-parche'
      color='primary'
      variant='h3'
      gutterBottom
      component='div'
    >
      Mis Parches
    </Typography>
  )
}
