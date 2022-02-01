import React from 'react'
import { Typography } from '@mui/material'

export default function TituloFiltros () {
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
      Busca un Parche
    </Typography>
  )
}
