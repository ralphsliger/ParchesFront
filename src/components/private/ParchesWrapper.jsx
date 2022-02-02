import { Stack, Typography, Button } from '@mui/material'
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const ParchesWrapper = ({ parche, uid }) => {
  return (
    <Stack
      borderBottom={1}
      boxShadow={1}
      justifyContent='center'
      alignItems='center'
      direction='row'
      spacing={4}
    >
      <Stack>
        <Typography color='#9e9e9e' variant='subtitle2'>
          {parche.fechaCreacion.valorFecha}
        </Typography>
        <Typography variant='h5'>{parche.nombreParche.valorNombre}</Typography>
        <Typography variant='subtitule2'>{parche.cantidadParticipantes.valorCantidadParticipantes}</Typography>
      </Stack>
      <Stack height={35} direction='row' spacing={3}>
        <Link to={`/private/detalle-parche/${parche.id}/${uid}`}>
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
    </Stack>
  )
}

export default ParchesWrapper
