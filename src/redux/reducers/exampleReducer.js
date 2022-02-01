import actionsTypesExample from '../actions/actionsTypes/ActionsTypeExample'

const initialState = {
  isLoading: false,
  example: null,
  error: null
}

const EXAMPLEReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesExample.LOADING_SUCCESS_MY_EXAMPLE:
      return {
        ...state,
        isLoading: true
      }

    default: return state
  }
}

export default EXAMPLEReducer
