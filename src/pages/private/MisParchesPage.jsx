import { Grid } from '@mui/material'
import { useEffect } from 'react'
import FiltroWrapper from '../../components/private/FiltroWrapper'
import ParcheWrapper from '../../components/private/ParcheWrapper'
import TituloFiltro from '../../components/private/TituloFiltro'
import TituloParche from '../../components/private/TituloParche'
import { useDispatch, useSelector } from 'react-redux'
import getMisParches from '../../redux/middlewares/getMisParches'

const MisParchesPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMisParches('xxx-xxx-xxx-xxx'))
  }, [])

  const misParches = useSelector(state => state.misParches)
  console.log(misParches)

  return (
    <Grid my={3} container spacing={4} justifyContent='center' alignItems='center'>
      <Grid item xs={8}>
        <TituloFiltro />
      </Grid>
      <Grid item xs={12}>
        <FiltroWrapper />
      </Grid>
      <Grid item xs={8}>
        <TituloParche />
      </Grid>
      {misParches.MisParches && misParches.MisParches.map((parche, index) => {
        return (
          <Grid key={index} item xs={9}>
            <ParcheWrapper parche={parche} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default MisParchesPage
