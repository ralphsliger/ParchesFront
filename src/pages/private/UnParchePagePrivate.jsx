import { useDispatch, useSelector } from 'react-redux'
import { getUnParche } from '../../app/middleware/getUnParche'
import { postInscripcion } from '../../app/middleware/postInscripcion'
import UnParchePrivate from '../../components/private/UnParchePrivate'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UnParchePagePrivate = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, unParche, error } = useSelector(state => state.unParche)

  useEffect(() => {
    dispatch(getUnParche(id))
  }, [dispatch, id])

  const desinscribirse = (id) => {
    // dispatch(deleteInscripcion(unParche.inscripcion.id))
  }

  const inscribirse = (userId) => {
    dispatch(postInscripcion(userId, unParche.id))
  }

  return (
    <>
      {unParche &&
        <>
          <UnParchePrivate
            unParche={unParche}
            inscribirse={inscribirse}
            desinscribirse={desinscribirse}
          />
          <div>
            <hr />
            <h3>Comentarios</h3>
          </div>
        </>}
      {isLoading && <h1>Cargando...</h1>}
      {error && <h1> Error {error} </h1>}
    </>
  )
}

export default UnParchePagePrivate
