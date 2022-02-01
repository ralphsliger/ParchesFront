import { useDispatch, useSelector } from 'react-redux'
import { getUnParche } from '../../redux/middlewares/getUnParche'
import { postInscripcion } from '../../redux/middlewares/postInscripcion'
import UnParchePrivate from '../../components/private/UnParchePrivate'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'

const UnParchePagePrivate = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, unParche, error } = useSelector(state => state.unParche)

  /* const unParche = {
    id: '1',
    nombre: 'Un parche',
    duenoDelParche: 'Juan',
    descripcion: 'Un parche de prueba',
    categorias: 'Categoría 1',
    fechaInicio: '2020-01-01',
    totalAsistentes: '0',
    capacidadMaxima: '10',
    ubicacion: 'Calle falsa 123'
  } */

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
          <Grid
            container
            spacing={3}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={8}>
              <UnParchePrivate
                unParche={unParche}
                inscribirse={inscribirse}
                desinscribirse={desinscribirse}
              />
            </Grid>
            <Grid item xs={8}>
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
