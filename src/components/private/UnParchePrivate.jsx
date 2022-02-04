import * as React from 'react'
import {
  Button,
  Typography,
  Box
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const UnParchePrivate = ({ unParche, inscribirse, desinscribirse }) => {
  const formateadorFecha = (fecha) => {
    const fechaFormateada = new Date(fecha)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return fechaFormateada.toLocaleDateString('es-ES', options)
  }
  const formateadorHora = (fecha) => {
    const fechaFormateada = new Date(fecha)
    return fechaFormateada.toLocaleTimeString()
  }

  const position = [unParche.ubicacionParche.lat, unParche.ubicacionParche.lng]

  return (
    <>
      <Typography align='center' color='primary' variant='h3'>{unParche.nombreParche.valorNombre}</Typography>
      <Card sx={{ width: '100%' }} style={{ border: 'none', boxShadow: 'none' }}>
        <CardHeader
          avatar={
            <Avatar ls={{ bgcolor: red[500] }} aria-label='recipe'>
              {unParche.duenoDelParche.nombres.substring(0, 1).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <EditIcon />
            </IconButton>
          }
          title={'Evento creado por: ' + unParche.duenoDelParche.nombres}
          subheader={'Total Asistentes: ' + unParche.cantidadAsistentes}
        />
        <CardContent>
          <Typography>
            <Box component='span' fontWeight='fontWeightBold'>Categoria: </Box>
            {unParche.categoria}
          </Typography>
          <Typography>
            <Box component='span' fontWeight='fontWeightBold'>Cupos: </Box>
            {unParche.capacidadMaxima.valorCapacidad}
          </Typography>
          <Typography>
            <Box component='span' fontWeight='fontWeightBold'>Descripción </Box>
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

          <Typography>
            <Box component='span' fontWeight='fontWeightBold'>Fecha Inicio: </Box>
            {`${formateadorFecha(unParche?.fechaInicio?.valorFecha)} - ${formateadorHora(unParche?.fechaInicio?.valorFecha)}`}
          </Typography>
          <Typography>
            <Box component='span' fontWeight='fontWeightBold'>Fecha Fin: </Box>
            {`${formateadorFecha(unParche?.fechaFin?.valorFecha)} - ${formateadorHora(unParche?.fechaFin?.valorFecha)}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {unParche && unParche.inscripcion.id !== null
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
                disabled={unParche.capacidadMaxima.valorCapacidad === unParche.cantidadAsistentes}
                onClick={(e) => inscribirse(e)}
              >
              Inscribirse
              </Button>}
        </CardActions>
      </Card>

    </>
  )
}

export default UnParchePrivate
