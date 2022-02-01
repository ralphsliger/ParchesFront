import React from 'react'

import { Stack } from '@mui/material'
import FiltroCategorias from './FiltroCategorias'
import FiltroNombreParche from './FiltroNombreParche'
import FiltroCiudadParche from './FiltroCiudadParche'
import FiltroPaisParche from './FiltroPaisParche'

export default function FiltroOpciones() {
  return (
    <Stack id='opciones-filtro' direction='row' spacing={1}>
      <FiltroCategorias />
      <FiltroNombreParche />
      <FiltroCiudadParche />
      <FiltroPaisParche />
    </Stack>
  )
}
