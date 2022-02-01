import { Button, Stack, Typography } from '@mui/material'

const UnParchePrivate = ({ unParche, inscribirse, desinscribirse }) => {
  return (
    <Stack>
      <Typography color='primary' variant='h3'>{unParche.nombre}</Typography>

      <div>Creador: {unParche.duenoDelParche}</div>
      <p>Descripción: {unParche.descripcion}</p>
      <p>Categoria: {unParche.categorias}</p>
      <p>Fecha Inicio{unParche.fechaInicio}</p>
      <p>Total Asistentes: {unParche.totalAsistentes}</p>
      <p>Cupos: {unParche.capacidadMaxima}</p>
      <p>Ubicación: {unParche.ubicacion}</p>

      {unParche && unParche.inscripcion
        ? <Button color='primary' onClick={desinscribirse}>Desinscribirse</Button>
        : <Button
            variant='contained'
            color='success'
            disabled={unParche.capacidadMaxima === unParche.totalAssistants}
            onClick={inscribirse}
          >
          Inscribirse
        </Button>}

    </Stack>
  )
}

export default UnParchePrivate
