import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function ParcheData({ parche }) {
  /* if (misParches) {
    console.log('id', misParches[0]?.id)
    console.log('nombreParche', misParches[0]?.nombreParche?.valorNombre)
    console.log('Participantes', misParches[0]?.cantidadParticipantes?.valorCantidadParticipantes)
    console.log('categoria', misParches[0]?.categoria)
    console.log('categoria', misParches[0]?.fechaInicio.valorFecha)
  } */
  const formateadorFecha = (fecha) => {
    const fechaFormateada = new Date(fecha)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return fechaFormateada.toLocaleDateString('es-ES', options)
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
        {formateadorFecha(parche.fechaInicio.valorFecha)}
        {/* Lunes 31 de enero de 2022 17:00 horas */}
      </Typography>

      <Typography id='texto-titulo-parche' variant='h5' gutterBottom component='div'>
        {parche.nombreParche.valorNombre}
        {/* Introducción a ES6+ */}
      </Typography>

      <Typography id='texto-interesados-parche' variant='subtitle2' gutterBottom component='div'>
        {`${parche.cantidadParticipantes?.valorCantidadParticipantes} Interesados`}
        {/* 30 Interesados */}
      </Typography>
    </Stack>
  )
}
