/* eslint-disable multiline-ternary */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import { Grid, Skeleton, Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import FiltroWrapper from '../../components/private/FiltroWrapper'
import ParcheWrapper from '../../components/private/ParcheWrapper'
import TituloFiltro from '../../components/private/TituloFiltro'
import TituloParche from '../../components/private/TituloParche'
import { useDispatch, useSelector } from 'react-redux'
import { getMisParches } from '../../redux/middlewares/getMisParches'

const MisParchesPage = () => {
  const { isLoading, misParches, error } = useSelector((state) => state.misParches)
  const { misParchesFiltrados, busquedaErronea } = useSelector((state) => state.filtroMisParches)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMisParches({}))
  }, [dispatch])

  return (
    <>
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
        {misParchesFiltrados.length > 0
          ? misParchesFiltrados?.map((parche) => (
              <Grid key={parche.id} item xs={9}>
                <ParcheWrapper parche={parche} />
              </Grid>
            ))
          : misParches?.map((parche) => (
              <Grid key={parche.id} item xs={9}>
                <ParcheWrapper parche={parche} />
              </Grid>
            ))}
      </Grid>
      {isLoading && (
        <Box pl={20} sx={{ width: 1000 }}>
          <Skeleton />
          <Skeleton animation='wave' />
          <Skeleton animation={false} />
        </Box>
      )}
      {error && <h1> Error {error} </h1>}
    </>
  )
}

export default MisParchesPage
