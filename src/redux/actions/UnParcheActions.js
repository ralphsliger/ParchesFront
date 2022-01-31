import ActionsTypeUnParche from './actionsTypes/ActionsTypeUnParche'

export const unParcheLoadSuccess = (unParche) => {
  return {
    type: ActionsTypeUnParche.LOAD_SUCCESS_UN_PARCHE,
    payload: unParche
  }
}

export const unParcheLoadError = (error) => {
  return {
    type: ActionsTypeUnParche.LOAD_FAILURE_UN_PARCHE,
    payload: error
  }
}

export const unParcheLoading = () => {
  return {
    type: ActionsTypeUnParche.LOADING_UN_PARCHE
  }
}
