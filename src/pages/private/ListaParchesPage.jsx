/* eslint-disable multiline-ternary */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import ParchesWrapper from '../../components/private/ParchesWrapper'
import FiltrosWrapper from '../../components/private/FiltrosWrapper'
import TituloFiltros from '../../components/private/TituloFiltros'
import TituloParches from '../../components/private/TituloParches'
import { useDispatch, useSelector } from 'react-redux'
import getTodosParches from '../../redux/middlewares/getTodosParches'

const ListaParchesPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodosParches())
  }, [])

  const parches = useSelector(state => state.listaParches)
  const { uid } = useSelector(state => state.auth)
  const { listaParchesFiltrados, busquedaErronea } = useSelector((state) => state.filtroListaParches)
  return (
    <Grid my={3} container spacing={4} justifyContent='center' alignItems='center'>
      <Grid item xs={8}>
        <TituloFiltros />
      </Grid>
      <Grid item xs={12}>
        <FiltrosWrapper />
      </Grid>
      <Grid item xs={8}>
        <TituloParches />
      </Grid>

      {busquedaErronea && (
          <Grid item xs={9}>
            <Typography
              letterSpacing={3}
              textAlign='center'
              id='texto-titulo-filtro'
              color='secondary'
              variant='h5'
              gutterBottom
              component='div'
            >
              No se encuentra lo buscado.
            </Typography>
          </Grid>
        )}
        {listaParchesFiltrados.length > 0
          ? listaParchesFiltrados?.map((parche) => (
              <Grid key={parche.id} item xs={9}>
                <ParchesWrapper parche={parche} />
              </Grid>
            ))
          : parches.Parches && parches.Parches.map((parche, index) => {
        return (
          <Grid key={index} item xs={9}>
            <ParchesWrapper parche={parche} uid={uid} />
          </Grid>
        )
      })}

    </Grid>

  )
}

export default ListaParchesPage
