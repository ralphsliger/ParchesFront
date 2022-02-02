import actionsTypesMisParches from './actionsTypes/ActionsTypeMisParches'

export const MisParchesLoadSuccess = (misParches) => {
  return {
    type: actionsTypesMisParches.LOAD_SUCCESS_MIS_PARCHES,
    payload: misParches
  }
}

export const MisParchesLoadError = (error) => {
  return {
    type: actionsTypesMisParches.LOAD_FAILURE_MIS_PARCHES,
    payload: error
  }
}

export const MisParchesLoading = () => {
  return {
    type: actionsTypesMisParches.LOADING_MIS_PARCHES
  }
}
