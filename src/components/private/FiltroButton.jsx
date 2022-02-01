import React from 'react'
import { Stack, Button } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
export default function FiltroButton () {
  return (
    <Stack height={35} direction='row' justifyContent='center' alignItems='center'>
      <Button id='boton-buscar-filtro' size='large' variant='contained' startIcon={<SearchIcon />}>
        Buscar
      </Button>
    </Stack>
  )
}
