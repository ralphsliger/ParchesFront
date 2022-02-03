import actionsTypesFiltrarListaParches from './actionsTypes/ActionsTypeFiltrarListaParches'

export const filtrarListaParches = (parches) => {
  return {
    type: actionsTypesFiltrarListaParches.FILTRAR_LISTA_PARCHES,
    payload: parches
  }
}

export const inputValueNombre = (nombreParche) => {
  return {
    type: actionsTypesFiltrarListaParches.INPUT_VALUE_NOMBRE,
    payload: nombreParche
  }
}

export const selectValueCategoria = (categoriaParche) => {
  return {
    type: actionsTypesFiltrarListaParches.SELECT_VALUE_CATEGORIA,
    payload: categoriaParche
  }
}

export const busquedaErronea = (valorBoolean) => {
  return {
    type: actionsTypesFiltrarListaParches.BUSQUEDA_ERRONEA,
    payload: valorBoolean
  }
}
