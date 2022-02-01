import authTypes from "../actions/actionsTypes/authTypes";

const initialState = {
  email: null,
  uid: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authTypes.INICIAR_SESION:
      const payload = action.payload;
      return { ...state,
         email: payload.email, 
         uid: payload.uid 
        };
    case authTypes.CERRAR_SESION:
      return initialState;
    default:
      return state;
  }
}
