import { combineReducers } from 'redux'
import EXAMPLEReducer from '../reducers/exampleReducer'
const rootReducer = () => {
  return combineReducers(
    {
      example:EXAMPLEReducer
    }
  )
}

export default rootReducer
