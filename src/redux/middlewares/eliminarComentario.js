import axios from 'axios'
import { API_URL } from '../../utils/Conexion'
import { getUnParche } from './getUnParche'

export const eliminarComentario = (id, parcheId, userId) => (dispatch) => {
    const options = {
        method: 'DELETE',
        url: `${API_URL}/eliminar/${id}`
    }

    axios.request(options).then(function (response) {
        dispatch(getUnParche(parcheId, userId))
    }).catch(function (error) {
        console.error(error)
    })
}