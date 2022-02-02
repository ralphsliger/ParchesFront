import actionsTypesFiltrarMisParches from './actionsTypes/ActionsTypeFiltrarMisParches'

export const filtrarMisParches = (parches) => {
  return {
    type: actionsTypesFiltrarMisParches.FILTRAR_MIS_PARCHES,
    payload: parches
  }
}

export const inputValueNombreParche = (nombreParche) => {
  return {
    type: actionsTypesFiltrarMisParches.INPUT_VALUE_NOMBRE_PARCHE,
    payload: nombreParche
  }
}

export const selectValueCategorias = (categoriaParche) => {
  return {
    type: actionsTypesFiltrarMisParches.SELECT_VALUE_CATEGORIAS,
    payload: categoriaParche
  }
}

export const busquedaErronea = (valorBoolean) => {
  return {
    type: actionsTypesFiltrarMisParches.BUSQUEDA_ERRONEA,
    payload: valorBoolean
  }
}
