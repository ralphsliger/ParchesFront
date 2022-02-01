import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

export default function FiltroCiudadParche() {
  const [ciudad, setCiudad] = useState('')

  const handleChange = (event) => {
    setCiudad(event.target.value)
  }
  return (
    <TextField
      id='textField-ciudadParche'
      label='Ciudad Parche'
      value={ciudad}
      onChange={handleChange}
      sx={{ width: 170 }}
    />
  )
}
