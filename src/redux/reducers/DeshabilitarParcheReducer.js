import actionsTypesDeshabilitarParche from '../actions/actionsTypes/ActionsTypeDeshabilitarParche'

const initialState = {
  isLoading: false,
  parcheDeshabilitado: null,
  error: null
}

const DeshabilitarParcheReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesDeshabilitarParche.LOAD_SUCCESS_DESHABILITAR_PARCHE:
      return {
        ...state,
        isLoading: false,
        parcheSeleccionado: payload,
        error: null
      }
    case actionsTypesDeshabilitarParche.LOAD_FAILURE_DESHABILITAR_PARCHE:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case actionsTypesDeshabilitarParche.LOADING_DESHABILITAR_PARCHE:
      return {
        ...state,
        isLoading: true,
        error: payload
      }
    default: return state
  }
}

export default DeshabilitarParcheReducer