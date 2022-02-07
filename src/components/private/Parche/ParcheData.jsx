import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function ParcheData({ parche }) {
  const formateadorFecha = (fecha) => {
    const fechaFormateada = new Date(fecha)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return fechaFormateada.toLocaleDateString('es-ES', options)
  }
  const formateadorHora = (fecha) => {
    const fechaFormateada = new Date(fecha)
    return fechaFormateada.toLocaleTimeString()
  }
  return (
    <Stack>
      <Typography
        id='texto-fecha-parche'
        color='#9e9e9e'
        variant='subtitle2'
        gutterBottom
        component='div'
      >
        {`${formateadorFecha(parche.fechaInicio.valorFecha)} - ${formateadorHora(
          parche.fechaInicio.valorFecha
        )}`}
      </Typography>

      <Typography id='texto-titulo-parche' variant='h5' gutterBottom component='div'>
        {parche.nombreParche.valorNombre}
      </Typography>

      <Typography id='texto-interesados-parche' variant='subtitle2' gutterBottom component='div'>
        {`${parche.cantidadParticipantes?.valorCantidadParticipantes} Interesados`}
      </Typography>
    </Stack>
  )
}
