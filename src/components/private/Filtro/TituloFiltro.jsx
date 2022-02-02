import React from 'react'
import { Typography } from '@mui/material'

export default function TituloFiltro() {
  return (
    <Typography
      letterSpacing={3}
      textAlign='center'
      id='texto-titulo-filtro'
      color='primary'
      variant='h3'
      gutterBottom
      component='div'
    >
      Encuentra tu parche ideal.
    </Typography>
  )
}
