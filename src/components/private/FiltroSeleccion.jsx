import React from 'react'

import { Stack } from '@mui/material'
import FiltroCategoria from './FiltroCategoria'
import FiltroNombre from './FiltroNombre'

export default function FiltroOpciones () {
  return (
    <Stack id='opciones-filtro' direction='row' spacing={1}>
      <FiltroCategoria />
      <FiltroNombre />
    </Stack>
  )
}
