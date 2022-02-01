import { Stack } from '@mui/material'
import React from 'react'
import ParcheButtons from './ParcheButtons'
import ParcheData from './ParcheData'

export default function ParcheWrapper() {
  return (
    <Stack
      id='componente-parche'
      borderBottom={1}
      boxShadow={1}
      justifyContent='center'
      alignItems='center'
      direction='row'
      spacing={4}
    >
      <ParcheData />
      <ParcheButtons />
    </Stack>
  )
}
