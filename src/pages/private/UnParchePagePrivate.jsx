import { useDispatch, useSelector } from 'react-redux'
import { getUnParche } from '../../redux/middlewares/getUnParche'
import { postInscripcion } from '../../redux/middlewares/postInscripcion'
import { deleteInscripcion } from '../../redux/middlewares/deleteInscripcion'
import UnParchePrivate from '../../components/private/UnParchePrivate'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'

const UnParchePagePrivate = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, unParche, error } = useSelector(state => state.unParche)

  useEffect(() => {
    dispatch(getUnParche(id, 'xxx'))
  }, [dispatch, id])

  const desinscribirse = (id) => {
    dispatch(deleteInscripcion(unParche.inscripcion.id))
  }

  const inscribirse = (userId) => {
    dispatch(postInscripcion(userId, unParche.id))
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
                <h3>Comentarios</h3>
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
