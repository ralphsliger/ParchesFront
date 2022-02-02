import { combineReducers } from 'redux'
import crearParcheReducer from '../reducers/CrearParcheReducer'
import UnParcheReducer from '../reducers/UnParcheReducer'
import registroReducer from '../reducers/registroReducer'
import authReducer from './../reducers/authReducer'
import misParchesReducer from './../reducers/misParchesReducer.'
import filtroMisParchesReducer from './../reducers/filtroMisParchesReducer'

const rootReducer = () => {
  return combineReducers({
    unParche: UnParcheReducer,
    misParches: misParchesReducer,
    filtroMisParches: filtroMisParchesReducer,
    registro: registroReducer,
    parcheCreado: crearParcheReducer,
    auth: authReducer
  })
}
export default rootReducer
