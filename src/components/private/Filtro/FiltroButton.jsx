import React from 'react'
import { Stack, Button } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { filtrarMisParches, busquedaErronea } from '../../../redux/actions/filtrarMisParchesActions'

export default function FiltroButton() {
  const { misParches } = useSelector((state) => state.misParches)
  const { selectValueCategorias, inputValueNombreParche } = useSelector(
    (state) => state.filtroMisParches
  )
  const dispatch = useDispatch()

  const handleFilter = () => {
    if (selectValueCategorias && inputValueNombreParche) {
      const result = misParches.filter(
        (parche) =>
          parche.categoria.toUpperCase() === selectValueCategorias.toUpperCase() &&
          parche.nombreParche.valorNombre.toUpperCase() === inputValueNombreParche.toUpperCase()
      )
      result.length === 0 ? dispatch(busquedaErronea(true)) : dispatch(busquedaErronea(false))
      dispatch(filtrarMisParches(result))
    }

    if (selectValueCategorias && !inputValueNombreParche) {
      const result = misParches.filter(
        (parche) => parche.categoria.toUpperCase() === selectValueCategorias.toUpperCase()
      )
      result.length === 0 ? dispatch(busquedaErronea(true)) : dispatch(busquedaErronea(false))
      dispatch(filtrarMisParches(result))
    }

    if (inputValueNombreParche && !selectValueCategorias) {
      const result = misParches.filter(
        (parche) =>
          parche.nombreParche.valorNombre.toUpperCase() === inputValueNombreParche.toUpperCase()
      )
      result.length === 0 ? dispatch(busquedaErronea(true)) : dispatch(busquedaErronea(false))
      dispatch(filtrarMisParches(result))
    }

    if (!inputValueNombreParche && !selectValueCategorias) {
      dispatch(busquedaErronea(false))
      dispatch(filtrarMisParches(misParches))
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
