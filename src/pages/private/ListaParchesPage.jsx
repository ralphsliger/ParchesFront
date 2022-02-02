import { Grid } from '@mui/material'
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
      {parches.Parches && parches.Parches.map((parche, index) => {
        return (
          <Grid key={index} item xs={9}>
            <ParchesWrapper parche={parche} />
          </Grid>
        )
      })}

    </Grid>

  )
}

export default ListaParchesPage
