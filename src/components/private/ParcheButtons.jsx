/* eslint-disable multiline-ternary */
import { Stack, Button } from '@mui/material'
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  MoreHoriz as MoreHorizIcon,
  Block as BlockIcon
} from '@mui/icons-material'
import React from 'react'

function ParcheButtons() {
  return (
    <Stack height={35} direction='row' spacing={3}>
      <Button size='small' variant='contained' startIcon={<EditIcon />}>
        Editar
      </Button>

      <Button size='small' variant='contained' startIcon={<DeleteIcon />}>
        Borrar
      </Button>

      {1 ? (
        <Button size='small' variant='contained' startIcon={<CheckCircleIcon />}>
          Habilitar
        </Button>
      ) : (
        <Button size='small' variant='contained' startIcon={<BlockIcon />}>
          Deshabilitar
        </Button>
      )}

      <Button color='info' size='small' variant='contained' startIcon={<MoreHorizIcon />}>
        Ver Más
      </Button>
    </Stack>
  )
}

export default ParcheButtons
