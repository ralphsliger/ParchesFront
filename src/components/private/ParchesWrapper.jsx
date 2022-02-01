import { Stack } from '@mui/material'
import React from 'react'
import ParcheBoton from './ParcheBoton'
import ParcheInfo from './ParcheInfo'

export default function ParchesWrapper () {
  return (
    <Stack
      borderBottom={1}
      boxShadow={1}
      justifyContent='center'
      alignItems='center'
      direction='row'
      spacing={4}
    >
      <ParcheInfo />
      <ParcheBoton />
    </Stack>
  )
}
