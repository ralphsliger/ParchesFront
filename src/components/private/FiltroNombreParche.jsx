import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

export default function FiltroNombreParche() {
  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
  }
  return (
    <TextField
      id='textField-nombre-filtro'
      label='Nombre Parche'
      value={name}
      onChange={handleChange}
      sx={{ width: 250 }}
    />
  )
}
