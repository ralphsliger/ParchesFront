import * as React from 'react'
import {
  Button,
  Typography
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet'

const UnParchePrivate = ({ unParche, inscribirse, desinscribirse }) => {
  const formateadorFecha = (fecha) => {
    const fechaFormateada = new Date(fecha)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return fechaFormateada.toLocaleDateString('es-ES', options)
  }

  const position = [unParche.ubicacionParche.lat, unParche.ubicacionParche.lng]

  return (
    <>
      <Typography align='center' color='primary' variant='h3'>{unParche.nombreParche.valorNombre}</Typography>
      <Card sx={{ width: '100%' }} style={{ border: 'none', boxShadow: 'none' }}>
        <CardHeader
          avatar={
            <Avatar ls={{ bgcolor: red[500] }} aria-label='recipe'>
              {unParche.duenoDelParche.substring(0, 1).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <EditIcon />
            </IconButton>
          }
          title={'Evento creado por: ' + unParche.duenoDelParche}
          subheader={'Total Asistentes: ' + unParche.cantidadAsistentes}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            Fecha Inicio: {formateadorFecha(unParche.fechaDeInicio.valorFecha)}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Fecha Fin: {formateadorFecha(unParche.fechaFin.valorFecha)}
          </Typography>
          <Typography variant='h6' color='textSecondary' component='p'>
            Categoria: {unParche.categoria}
          </Typography>
          <Typography variant='h6' color='textSecondary' component='p'>
            Cupos: {unParche.capacidadMaxima.valorCapacidad}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary' component='p'>
            Descripción:
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {unParche.descripcion.valorDescripcion}
          </Typography>

          <MapContainer
            id='map'
            center={position}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='
                &copy;
                SofkaU'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup />
            </Marker>
          </MapContainer>

        </CardContent>
        <CardActions disableSpacing>
          {unParche && unParche.inscripcion
            ? <Button
                variant='contained'
                color='success'
                onClick={desinscribirse}
              >
              Desinscribirse
              </Button>
            : <Button
                variant='contained'
                color='primary'
                disabled={unParche.capacidadMaxima === unParche.totalAssistants}
                onClick={inscribirse}
              >
              Inscribirse
              </Button>}
        </CardActions>
      </Card>

    </>
  )
}

export default UnParchePrivate
