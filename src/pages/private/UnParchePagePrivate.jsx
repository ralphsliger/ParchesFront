import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUnParche } from '../../redux/middlewares/getUnParche'
import { postInscripcion } from '../../redux/middlewares/postInscripcion'
import { deleteInscripcion } from '../../redux/middlewares/deleteInscripcion'
import UnParchePrivate from '../../components/private/UnParchePrivate'
import { useEffect } from 'react'
import { Grid } from '@mui/material'
import Comentarios from '../../components/private/Comentarios'
import CrearComentario from '../../components/private/CrearComentario'

const UnParchePagePrivate = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, unParche, error } = useSelector(state => state.unParche)
  const { uid } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(getUnParche(id, uid))
  }, [dispatch, id, uid])

  const desinscribirse = (e) => {
    e.preventDefault()
    dispatch(deleteInscripcion(unParche.inscripcion.id, uid, id))
  }

  const inscribirse = (e) => {
    e.preventDefault()
    dispatch(postInscripcion(uid, unParche.id))
  }

  return (
    <>
      {unParche &&
        <>
          <Grid
            container
            spacing={3}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={10}>
              <UnParchePrivate
                unParche={unParche}
                inscribirse={inscribirse}
                desinscribirse={desinscribirse}
              />
            </Grid>
            <Grid item xs={10}>
              <div>
                <hr />
              </div>
              <div className='m-auto'>
                {(unParche.comentarioDTOS.length > 0) ? <div className=' overflow-y-auto h-96'> <Comentarios comentarios={unParche.comentarioDTOS} /></div> : <span>No existen comentarios</span>}
                <div className='my-4'>
                  <CrearComentario uid={uid} />
                </div>
              </div>
            </Grid>
          </Grid>

        </>}
      {isLoading && <h1>Cargando...</h1>}
      {error && <h1> Error {error} </h1>}
    </>
  )
}

export default UnParchePagePrivate
