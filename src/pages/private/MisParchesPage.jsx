import { Grid } from '@mui/material'
import React from 'react'
import FiltroWrapper from '../../components/private/FiltroWrapper'
import ParcheWrapper from '../../components/private/ParcheWrapper'
import TituloFiltro from '../../components/private/TituloFiltro'
import TituloParche from '../../components/private/TituloParche'

const MisParchesPage = () => {
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
      <Grid item xs={9}>
        <ParcheWrapper />
      </Grid>
      <Grid item xs={9}>
        <ParcheWrapper />
      </Grid>
      <Grid item xs={9}>
        <ParcheWrapper />
      </Grid>
      <Grid item xs={9}>
        <ParcheWrapper />
      </Grid>
    </Grid>
  )
}

export default MisParchesPage
