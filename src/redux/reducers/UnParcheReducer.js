import actionsTypesUnParche from '../actions/actionsTypes/ActionsTypeUnParche'

const initialState = {
  isLoading: false,
  unParche: null,
  error: null
}

const UnParcheReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesUnParche.LOAD_SUCCESS_UN_PARCHE:
      return {
        ...state,
        isLoading: false,
        unParche: payload,
        error: null
      }
    case actionsTypesUnParche.LOAD_FAILURE_UN_PARCHE:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case actionsTypesUnParche.LOADING_UN_PARCHE
      :
      return {
        ...state,
        isLoading: true,
        error: payload
      }
    default: return state
  }
}

export default UnParcheReducer
