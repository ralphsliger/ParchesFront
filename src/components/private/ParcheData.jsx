import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function ParcheData() {
  return (
    <Stack>
      <Typography color='#9e9e9e' variant='subtitle2' gutterBottom component='div'>
        Lunes 31 de enero de 2022 17:00 horas
      </Typography>

      <Typography variant='h5' gutterBottom component='div'>
        Introducción a ES6+
      </Typography>

      <Typography variant='subtitle2' gutterBottom component='div'>
        30 Interesados
      </Typography>
    </Stack>
  )
}
