import { combineReducers } from 'redux'
import crearParcheReducer from '../reducers/CrearParcheReducer'
import UnParcheReducer from '../reducers/UnParcheReducer'
import registroReducer from '../reducers/registroReducer'
import authReducer from './../reducers/authReducer'

const rootReducer = () => {
  return combineReducers(
    {
      unParche: UnParcheReducer,
      registro: registroReducer,
      parcheCreado: crearParcheReducer,
      auth: authReducer
    }
  )

export default rootReducer
