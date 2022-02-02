import Comentario from './Comentario'

const Comentarios = ({ comentarios }) => {
  return (
    <>
      {comentarios.sort((a, b) => a.fechaCreacion > b.fechaCreacion ? 1 : -1).map((comentario, index) => {
        return <Comentario key={index} comentario={comentario} />
      })}
    </>
  )
}

export default Comentarios
