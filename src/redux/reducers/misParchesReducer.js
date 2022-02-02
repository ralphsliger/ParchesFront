import actionsTypesMisParches from '../actions/actionsTypes/ActionsTypeMisParches'

const initialState = {
  isLoading: false,
  misParches: null,
  error: null
}

const misParchesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesMisParches.LOAD_SUCCESS_MIS_PARCHES:
      return {
        ...state,
        isLoading: false,
        misParches: payload,
        error: null
      }
    case actionsTypesMisParches.LOAD_FAILURE_MIS_PARCHES:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case actionsTypesMisParches.LOADING_MIS_PARCHES:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    default:
      return state
  }
}

export default misParchesReducer
