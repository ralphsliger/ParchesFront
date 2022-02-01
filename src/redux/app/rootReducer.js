import { combineReducers } from 'redux'
import UnParcheReducer from '../reducers/UnParcheReducer'

const rootReducer = () => {
  return combineReducers(
    {
      unParche: UnParcheReducer
    }
  )
}

export default rootReducer
