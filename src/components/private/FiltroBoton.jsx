import React from 'react'
import { Stack, Button } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { filtrarListaParches, busquedaErronea } from '../../redux/actions/filtrarListaParchesActions'

export default function FiltroBoton () {
  const { Parches } = useSelector((state) => state.listaParches)
  const { selectValueCategoria, inputValueNombre } = useSelector(
    (state) => state.filtroListaParches
  )
  const dispatch = useDispatch()

  const handleFilter = () => {
    if (selectValueCategoria && inputValueNombre) {
      const result = Parches.filter(
        (parche) =>
          parche.categoria.toUpperCase() === selectValueCategoria.toUpperCase() &&
          parche.nombreParche.valorNombre.toUpperCase() === inputValueNombre.toUpperCase()
      )
      result.length === 0 ? dispatch(busquedaErronea(true)) : dispatch(busquedaErronea(false))
      dispatch(filtrarListaParches(result))
    }

    if (selectValueCategoria && !inputValueNombre) {
      const result = Parches.filter(
        (parche) => parche.categoria.toUpperCase() === selectValueCategoria.toUpperCase()
      )
      console.log('entro al caso', result)
      result.length === 0 ? dispatch(busquedaErronea(true)) : dispatch(busquedaErronea(false))
      dispatch(filtrarListaParches(result))
    }

    if (inputValueNombre && !selectValueCategoria) {
      const result = Parches.filter(
        (parche) =>
          parche.nombreParche.valorNombre.toUpperCase() === inputValueNombre.toUpperCase()
      )
      result.length === 0 ? dispatch(busquedaErronea(true)) : dispatch(busquedaErronea(false))
      dispatch(filtrarListaParches(result))
    }

    if (!inputValueNombre && !selectValueCategoria) {
      dispatch(busquedaErronea(false))
      dispatch(filtrarListaParches(Parches))
    }
  }
  return (
    <Stack height={35} direction='row' justifyContent='center' alignItems='center'>
      <Button
        onClick={handleFilter}
        id='boton-buscar-filtro'
        size='large'
        variant='contained'
        startIcon={<SearchIcon />}
      >
        Buscar
      </Button>
    </Stack>
  )
}
