import { useDispatch, useSelector } from 'react-redux'
import { getUnParche } from '../../app/middleware/getUnParche'
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
    // dispatch(deleteInscripcion(id))
  }

  return (
    <>
      {unParche &&
        <>
          <UnParchePrivate unParche={unParche} />
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
