import actionsTypesDeshabilitarParche from './actionsTypes/ActionsTypeDeshabilitarParche'

export const deshabilitarParche = (response) => {
  return {
    type: actionsTypesDeshabilitarParche.LOAD_SUCCESS_DESHABILITAR_PARCHE,
    payload: response
  }
}

export const deshabilitarParcheError = (error) => {
  return {
    type: actionsTypesDeshabilitarParche.LOAD_FAILURE_DESHABILITAR_PARCHE,
    payload: error
  }
}

export const deshabilitarParcheLoading = () => {
  return {
    type: actionsTypesDeshabilitarParche.LOADING_DESHABILITAR_PARCHE
  }
}