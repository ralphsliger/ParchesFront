import actionsTypesMisParches from './actionsTypes/ActionsTypeMisParches'

export const misParchesLoadSuccess = (misParches) => {
  return {
    type: actionsTypesMisParches.LOAD_SUCCESS_MIS_PARCHES,
    payload: misParches
  }
}

export const misParchesLoadError = (error) => {
  return {
    type: actionsTypesMisParches.LOAD_FAILURE_MIS_PARCHES,
    payload: error
  }
}

export const misParchesLoading = () => {
  return {
    type: actionsTypesMisParches.LOADING_MIS_PARCHES
  }
}
