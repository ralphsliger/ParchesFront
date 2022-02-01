import { Grid } from '@mui/material'
import React from 'react'
import ParchesWrapper from '../../components/private/ParchesWrapper'
import FiltrosWrapper from '../../components/private/FiltrosWrapper'
import TituloFiltros from '../../components/private/TituloFiltros'
import TituloParches from '../../components/private/TituloParches'

const ListaParchesPage = () => {
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
      <Grid item xs={9}>
        <ParchesWrapper />
      </Grid>
      <Grid item xs={9}>
        <ParchesWrapper />
      </Grid>
      <Grid item xs={9}>
        <ParchesWrapper />
      </Grid>
      <Grid item xs={9}>
        <ParchesWrapper />
      </Grid>
    </Grid>
  )
}

export default ListaParchesPage
