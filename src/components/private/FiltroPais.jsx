import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

export default function FiltroPais () {
  const [pais, setPais] = useState('')

  const handleChange = (event) => {
    setPais(event.target.value)
  }
  return (
    <TextField
      id='textField-pais-filtro'
      label='País Parche'
      value={pais}
      onChange={handleChange}
      sx={{ width: 150 }}
    />
  )
}
