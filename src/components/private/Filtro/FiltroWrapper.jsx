import React from 'react'
import { Stack } from '@mui/material'
import FiltroButton from './FiltroButton'
import FiltroOpciones from './FiltroOpciones'

export default function FiltroWrapper() {
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
      <FiltroOpciones />
      <FiltroButton />
    </Stack>
  )
}
