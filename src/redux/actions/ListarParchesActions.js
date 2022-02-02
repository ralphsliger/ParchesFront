import actionsTypesListaParche from './actionsTypes/ActionsTypesListParches'

export const ListaParchesLoadSuccess = (Parches) => {
  return {
    type: actionsTypesListaParche.LOAD_SUCCESS_LISTA_PARCHE,
    payload: Parches
  }
}

export const ListaParchesLoadError = (error) => {
  return {
    type: actionsTypesListaParche.LOAD_FAILURE_LISTA_PARCHE,
    payload: error
  }
}

export const ListaParchesLoading = () => {
  return {
    type: actionsTypesListaParche.LOADING_LISTA_PARCHE
  }
}
