import actionsTypesListaParche from '../actions/actionsTypes/ActionsTypesListParches'

const initialState = {
  isLoading: false,
  Parches: [],
  error: null
}

const ParchesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesListaParche.LOAD_SUCCESS_LISTA_PARCHE:
      return {
        ...state,
        isLoading: false,
        Parches: payload,
        error: null
      }
    case actionsTypesListaParche.LOAD_FAILURE_LISTA_PARCHE:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case actionsTypesListaParche.LOADING_LISTA_PARCHE
      :
      return {
        ...state,
        isLoading: true
      }
    default: return state
  }
}

export default ParchesReducer
