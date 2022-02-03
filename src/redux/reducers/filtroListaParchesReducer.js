import actionsTypesFiltrarListaParches from '../actions/actionsTypes/ActionsTypeFiltrarListaParches'

const initialState = {
  listaParchesFiltrados: [],
  selectValueCategoria: null,
  inputValueNombre: null,
  busquedaErronea: false
}

const filtrolistaParchesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesFiltrarListaParches.FILTRAR_LISTA_PARCHES:
      return {
        ...state,
        listaParchesFiltrados: payload
      }

    case actionsTypesFiltrarListaParches.INPUT_VALUE_NOMBRE:
      return {
        ...state,
        inputValueNombre: payload
      }

    case actionsTypesFiltrarListaParches.SELECT_VALUE_CATEGORIA:
      return {
        ...state,
        selectValueCategoria: payload
      }

    case actionsTypesFiltrarListaParches.BUSQUEDA_ERRONEA:
      return {
        ...state,
        busquedaErronea: payload
      }
    default:
      return state
  }
}

export default filtrolistaParchesReducer
