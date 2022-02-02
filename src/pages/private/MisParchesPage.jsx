import { Grid, Skeleton, Box } from '@mui/material'
import React, { useEffect } from 'react'
import FiltroWrapper from '../../components/private/FiltroWrapper'
import ParcheWrapper from '../../components/private/ParcheWrapper'
import TituloFiltro from '../../components/private/TituloFiltro'
import TituloParche from '../../components/private/TituloParche'
import { useDispatch, useSelector } from 'react-redux'
import { getMisParches } from '../../redux/middlewares/getMisParches'

const MisParchesPage = () => {
  const { isLoading, misParches, error } = useSelector((state) => state.misParches)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMisParches({}))
  }, [dispatch])

  console.log(misParches)
  if (misParches) {
    console.log('id', misParches[0]?.id)
    console.log('nombreParche', misParches[0]?.nombreParche?.valorNombre)
    console.log('Participantes', misParches[0]?.cantidadParticipantes?.valorCantidadParticipantes)
    console.log('categoria', misParches[0]?.categoria)
  }

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

        {misParches?.map((parche) => (
          <Grid key={parche.id} item xs={9}>
            <ParcheWrapper parche={parche} />
          </Grid>
        ))}

        {/* <Grid item xs={9}>
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
      </Grid> */}
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
