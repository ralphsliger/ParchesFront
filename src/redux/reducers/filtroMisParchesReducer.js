import actionsTypesFiltrarMisParches from '../actions/actionsTypes/ActionsTypeFiltrarMisParches'

const initialState = {
  misParchesFiltrados: [],
  selectValueCategorias: null,
  inputValueNombreParche: null,
  busquedaErronea: false
}

const filtroMisParchesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypesFiltrarMisParches.FILTRAR_MIS_PARCHES:
      return {
        ...state,
        misParchesFiltrados: payload
      }

    case actionsTypesFiltrarMisParches.INPUT_VALUE_NOMBRE_PARCHE:
      return {
        ...state,
        inputValueNombreParche: payload
      }

    case actionsTypesFiltrarMisParches.SELECT_VALUE_CATEGORIAS:
      return {
        ...state,
        selectValueCategorias: payload
      }

    case actionsTypesFiltrarMisParches.BUSQUEDA_ERRONEA:
      return {
        ...state,
        busquedaErronea: payload
      }
    default:
      return state
  }
}

export default filtroMisParchesReducer
