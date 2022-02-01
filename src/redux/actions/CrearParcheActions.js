import actionsTypesCrearParche from './actionsTypes/ActionsTypeCrearParche'

export const crearParche = (parche) => {
  return {
    type: actionsTypesCrearParche.LOAD_SUCCESS_CREAR_PARCHE,
    payload: parche
  }
}

export const crearParcheError = (error) => {
  return {
    type: actionsTypesCrearParche.LOAD_FAILURE_CREAR_PARCHE,
    payload: error
  }
}

export const crearParcheLoading = () => {
  return {
    type: actionsTypesCrearParche.LOADING_CREAR_PARCHE
  }
}
