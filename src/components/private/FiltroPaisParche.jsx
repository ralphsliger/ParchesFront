import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

export default function FiltroPaisParche() {
  const [pais, setPais] = useState('')

  const handleChange = (event) => {
    setPais(event.target.value)
  }
  return (
    <TextField
      id='textField-paisParche'
      label='País Parche'
      value={pais}
      onChange={handleChange}
      sx={{ width: 150 }}
    />
  )
}
