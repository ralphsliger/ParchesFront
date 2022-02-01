import actionsTypesCrearParche from '../actions/actionsTypes/ActionsTypeCrearParche'

const initialState = {
  isLoading: false,
  parcheCreado: null,
  error: null
}

const crearParcheReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesCrearParche.LOAD_SUCCESS_CREAR_PARCHE:
      return {
        ...state,
        isLoading: false,
        parcheCreado: payload,
        error: null
      }
    case actionsTypesCrearParche.LOAD_FAILURE_CREAR_PARCHE:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case actionsTypesCrearParche.LOADING_CREAR_PARCHE:
      return {
        ...state,
        isLoading: true,
        error: payload
      }
    default: return state
  }
}

export default crearParcheReducer
