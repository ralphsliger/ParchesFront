import { combineReducers } from 'redux'
import crearParcheReducer from '../reducers/CrearParcheReducer'
import UnParcheReducer from '../reducers/UnParcheReducer'
import EditarParcheReducer from '../reducers/EditarParcheReducer'

const rootReducer = () => {
  return combineReducers(
    {
      unParche: UnParcheReducer,
      parcheCreado: crearParcheReducer,
      ParcheEditado: EditarParcheReducer
    }
  )
}

export default rootReducer
