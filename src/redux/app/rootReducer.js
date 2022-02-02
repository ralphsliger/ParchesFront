import { combineReducers } from 'redux'
import crearParcheReducer from '../reducers/CrearParcheReducer'
import UnParcheReducer from '../reducers/UnParcheReducer'
import registroReducer from '../reducers/registroReducer'
import authReducer from './../reducers/authReducer'
import ParchesReducer from '../reducers/ParchesReducer'
import MisParchesReducer from '../reducers/MisParchesReducer'
import EditarParcheReducer from '../reducers/EditarParcheReducer'

const rootReducer = () => {
  return combineReducers(
    {
      unParche: UnParcheReducer,
      registro: registroReducer,
      parcheCreado: crearParcheReducer,
      auth: authReducer,
      listaParches: ParchesReducer,
      misParches: MisParchesReducer,
      ParcheEditado: EditarParcheReducer
    }
  )
}
export default rootReducer
