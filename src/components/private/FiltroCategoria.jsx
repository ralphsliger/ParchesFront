import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useDispatch } from 'react-redux'
import { selectValueCategoria } from '../../redux/actions/filtrarListaParchesActions'

const options = [
  'Tecnología',
  'VideoJuegos',
  'Arte',
  'Negocios',
  'Moda',
  'Deporte',
  'Gastronomia',
  'Fiestas',
  'Conferencias',
  ' Cine',
  'Lectura',
  'Aprendizaje',
  'Varios'
]

export default function FiltroCategoria () {
  const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(selectValueCategoria(value))
  }, [value])

  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        id='select-categoria-filtro'
        options={options}
        sx={{ width: 170 }}
        renderInput={(params) => <TextField {...params} label='Categorias' />}
      />
    </div>
  )
}
