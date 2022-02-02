import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const DropdownModal = ({ handleInputChange, categoria }) => {
  return (
    <Box sx={{ minWidth: 190 }} className='bg-gray-100'>
      <FormControl fullWidth>
        <InputLabel id='inputCategiriaLabel'>Categoria</InputLabel>
        <Select
          labelId='inputCategiria'
          id='inputCategiria'
          name='categoria'
          onChange={handleInputChange}
          value={categoria}
          label='Categoria'
        >
          <MenuItem value='TECNOLOGIA'>TECNOLOGIA</MenuItem>
          <MenuItem value='VIDEOJUEGOS'>VIDEOJUEGOS</MenuItem>
          <MenuItem value='ARTE'>ARTE</MenuItem>
          <MenuItem value='NEGOCIOS'>NEGOCIOS</MenuItem>
          <MenuItem value='MODA'>MODA</MenuItem>
          <MenuItem value='DEPORTE'>DEPORTE</MenuItem>
          <MenuItem value='GASTRONOMIA'>GASTRONOMIA</MenuItem>
          <MenuItem value='FIESTAS'>FIESTAS</MenuItem>
          <MenuItem value='CONFERENCIAS'>CONFERENCIAS</MenuItem>
          <MenuItem value='CITA'>CITA</MenuItem>
          <MenuItem value='LECTURA'>LECTURA</MenuItem>
          <MenuItem value='APRENDIZAJE'>APRENDIZAJE</MenuItem>
          <MenuItem value='VARIOS'>VARIOS</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default DropdownModal
