<<<<<<< HEAD
// const initialState = {
//     isLoading: false,
//     example: null,
//     error: null
//   }

// const EXAMPLEReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//       case actionsType EXAMPLE.LOADING_SUCCESS EXAMPLES:
//         return {
//           ...state,
//           isLoading: true
//         }
//       case actionsType EXAMPLE.LOAD_SUCCESS EXAMPLES:
//         return {
//           ...state,
//           isLoading: false,
//           EXAMPLEs: payload
//         }
//       case actionsType EXAMPLE.LOAD_FAILURE EXAMPLES:
//         return {
//           ...state,
//           isLoading: false,
//           error: payload
//         }

//       default: return state
//     }
// }
=======
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
>>>>>>> main
