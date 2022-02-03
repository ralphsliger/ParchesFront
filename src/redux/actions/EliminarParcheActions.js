import actionsTypesEliminarParche from './actionsTypes/ActionsTypeEliminarParche'

export const parcheBorrado = (response) => {
  return {
    type: actionsTypesEliminarParche.LOAD_SUCCESS_ELIMINAR_PARCHE,
    payload: response
  }
}

export const parcheBorradoError = (error) => {
  return {
    type: actionsTypesEliminarParche.LOAD_FAILURE_ELIMINAR_PARCHE,
    payload: error
  }
}

export const parcheBorradoLoading = () => {
  return {
    type: actionsTypesEliminarParche.LOADING_ELIMINAR_PARCHE
  }
}