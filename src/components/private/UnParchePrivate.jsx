import { Button } from '@mui/material'

const UnParchePrivate = ({ unParche, inscribirse, desinscribirse }) => {
  return (
    <div>
      <h1>{unParche.nombre}</h1>
      <h2>
        Creador: {unParche.duenoDelParche}
      </h2>
      <p>Descripción: {unParche.descripcion}</p>
      <p>Categoria: {unParche.categorias}</p>
      <p>Fecha Inicio{unParche.fechaInicio}</p>
      <p>Total Asistentes: {unParche.totalAsistentes}</p>
      <p>Cupos: {unParche.capacidadMaxima}</p>
      <p>Ubicación: {unParche.ubicacion}</p>

      {unParche && unParche.inscripcion
        ? <Button color='primary' onClick={desinscribirse}>Desinscribirse</Button>
        : <Button
            color='success'
            disabled={unParche.capacidadMaxima === unParche.totalAssistants}
            onClick={inscribirse}
          >
          Inscribirse
        </Button>}
    </div>
  )
}

export default UnParchePrivate
