import { combineReducers } from 'redux'
import authReducer from './../reducers/authReducer';

const rootReducer = () => {
  return combineReducers(
    {
      auth: authReducer
    }
)}

export default rootReducer
