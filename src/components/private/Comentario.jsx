import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import '../../Assents/Styles/Comentario.css'

const Comentario = ({ comentario }) => {
  return (
    <>
      <div className=' border-2 mb-5 flex contenido py-5'>
        <div className='contenedorimag'>
          <img className='imgusuario' src={comentario.usuario.imagenUrl} />
        </div>
        <div className='cuerpo'>
          <div className=' flex'>
            <span className='nombreusuario'>{comentario.usuario.nombres}</span>
            <span className='fechacreacion'>{comentario.fechaCreacion}</span>
          </div>
          <div className=' my-2 w-11/12'>
            <p>{comentario.mensaje}</p>
          </div>
        </div>
        <div className='eliminar'>
          <button><DeleteForeverIcon sx={{ color: '#140d4fff', '&:hover': { color: '#c0392b' } }} /></button>
        </div>
      </div>
    </>
  )
}

export default Comentario
