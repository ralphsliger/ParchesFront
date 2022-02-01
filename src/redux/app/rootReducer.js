import { combineReducers } from 'redux'
import crearParcheReducer from '../reducers/CrearParcheReducer'
import UnParcheReducer from '../reducers/UnParcheReducer'

const rootReducer = () => {
  return combineReducers(
    {
      unParche: UnParcheReducer,
      parcheCreado: crearParcheReducer
    }
  )
}

export default rootReducer
