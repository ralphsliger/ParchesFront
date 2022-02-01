import React from 'react'

import { Stack } from '@mui/material'
import FiltroCategoria from './FiltroCategoria'
import FiltroNombre from './FiltroNombre'
import FiltroCiudad from './FiltroCiudad'
import FiltroPais from './FiltroPais'

export default function FiltroOpciones () {
  return (
    <Stack id='opciones-filtro' direction='row' spacing={1}>
      <FiltroCategoria />
      <FiltroNombre />
      <FiltroCiudad />
      <FiltroPais />
    </Stack>
  )
}
