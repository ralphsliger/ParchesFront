import actionsTypesEliminarParche from '../actions/actionsTypes/ActionsTypeEliminarParche'

const initialState = {
  isLoading: false,
  parcheEliminado: null,
  error: null
}

const EliminarParcheReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesEliminarParche.LOAD_SUCCESS_ELIMINAR_PARCHE:
      return {
        ...state,
        isLoading: false,
        parcheEliminado: payload,
        error: null
      }
    case actionsTypesEliminarParche.LOAD_FAILURE_ELIMINAR_PARCHE:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case actionsTypesEliminarParche.LOADING_ELIMINAR_PARCHE:
      return {
        ...state,
        isLoading: true,
        error: payload
      }
    default: return state
  }
}

export default EliminarParcheReducer