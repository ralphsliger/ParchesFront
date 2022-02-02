import actionsTypesEditarParche from '../actions/actionsTypes/ActionsTypeEditarParche'

const initialState = {
  isLoading: false,
  parcheCreado: null,
  direccion: null,
  error: null
}

const EditarParcheReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesEditarParche.LOAD_SUCCESS_EDITAR_PARCHE:
      return {
        ...state,
        isLoading: false,
        parcheCreado: payload,
        error: null
      }
    case actionsTypesEditarParche.LOAD_ACTUALIZAR_DIRECCION:
      return {
        ...state,
        isLoading: false,
        direccion: payload,
        error: null
      }
    case actionsTypesEditarParche.LOAD_FAILURE_EDITAR_PARCHE:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case actionsTypesEditarParche.LOADING_EDITAR_PARCHE:
      return {
        ...state,
        isLoading: true,
        error: payload
      }
    default: return state
  }
}

export default EditarParcheReducer
