import { Stack, Button } from '@mui/material'
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function ParcheBoton () {
  return (
    <Stack height={35} direction='row' spacing={3}>
      <Link to='/private/detalle-parche/61f9e35e5726d85867ffae41/xxx'>
        <Button
          id='boton-verMas-parche'
          color='info'
          size='small'
          variant='contained'
          startIcon={<MoreHorizIcon />}
        >
          Ver
        </Button>
      </Link>
    </Stack>
  )
}

export default ParcheBoton
