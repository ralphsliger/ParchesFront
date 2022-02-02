import actionsTypesMisParches from '../actions/actionsTypes/ActionsTypeMisParches'

const initialState = {
  isLoading: false,
  MisParches: null,
  error: null
}

const MisParchesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesMisParches.LOAD_SUCCESS_MIS_PARCHES:
      return {
        ...state,
        isLoading: false,
        MisParches: payload,
        error: null
      }
    case actionsTypesMisParches.LOAD_FAILURE_MIS_PARCHES:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case actionsTypesMisParches.LOADING_MIS_PARCHES
      :
      return {
        ...state,
        isLoading: true
      }
    default: return state
  }
}

export default MisParchesReducer
