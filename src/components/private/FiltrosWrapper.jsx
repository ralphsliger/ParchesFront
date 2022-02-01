import React from 'react'
import { Stack } from '@mui/material'
import FiltroBoton from './FiltroBoton'
import FiltroSeleccion from './FiltroSeleccion'

export default function FiltrosWrapper () {
  return (
    <Stack
      mt={-3}
      id='componente-filtro'
      borderBottom={1}
      boxShadow={1}
      justifyContent='center'
      alignItems='center'
      direction='row'
      spacing={2}
      pb={2}
    >
      <FiltroSeleccion />
      <FiltroBoton />
    </Stack>
  )
}
