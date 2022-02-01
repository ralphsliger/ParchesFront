import { combineReducers } from 'redux'
import UnParcheReducer from '../reducers/UnParcheReducer'
import registroReducer from '../reducers/registroReducer'

const rootReducer = () => {
  return combineReducers(
    {
      unParche: UnParcheReducer,
      registro: registroReducer
    }
  )
}

export default rootReducer
