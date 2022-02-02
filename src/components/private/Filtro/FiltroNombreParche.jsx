import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { useDispatch } from 'react-redux'
import { inputValueNombreParche } from '../../../redux/actions/filtrarMisParchesActions'

export default function FiltroNombreParche() {
  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(inputValueNombreParche(name))
  }, [name])

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
