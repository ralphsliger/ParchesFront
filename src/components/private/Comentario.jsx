import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import '../../Assents/Styles/Comentario.css'
import { useSelector, useDispatch } from 'react-redux'
import { eliminarComentario } from '../../redux/middlewares/eliminarComentario'
import { useState } from 'react'
import EliminarModal from './EliminarModal'

const Comentario = ({ comentario }) => {
  const { unParche } = useSelector(state => state.unParche)
  const { uid } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [ estado, setEstado ] = useState(false)

  let mensajeModal = {
    titulo: "Eliminar Comentario",
    msg: "¿Seguro que deseas eliminar este comentario?"
  }

  const eliminar = (e) => {
    e.preventDefault()
    setEstado(true)    
  }

  const handleConfirm = () => {
    dispatch(eliminarComentario(comentario.id, unParche.id, comentario.usuario.uid))
    setEstado(false)
  }

  const handleClose = () => {
    setEstado(false)
  }

  return (
    <>
      <div className=' border-2 mb-5 flex contenido py-5'>
        <div className='contenedorimag'>
          <img id='imagenPerfilComentario' className='imgusuario' src={comentario.usuario.imagenUrl} />
        </div>
        <div className='cuerpo'>
          <div className=' flex'>
            <span id='nombreUsuarioComentario' className='nombreusuario'>{comentario.usuario.nombres}</span>
            <span id='fechaUsuarioComentario' className='fechacreacion'>{comentario.fechaCreacion}</span>
          </div>
          <div className=' my-2 w-11/12'>
            <p id='mensajeComentario'>{comentario.mensaje}</p>
          </div>
        </div>
        <div className='eliminar'>
        {unParche.duenoDelParche.uid === uid || comentario.usuario.uid === uid ?          
            <button id='botonEliminarComentario' onClick={(e) => eliminar(e)}><DeleteForeverIcon sx={{ color: '#140d4fff', '&:hover': { color: '#c0392b' } }} /></button>          
          : null
        }  
        </div>      
      </div>
      <EliminarModal open={estado} handleClose={handleClose} handleConfirm={handleConfirm} msgModal={mensajeModal}/>
    </>
  )
}

export default Comentario
