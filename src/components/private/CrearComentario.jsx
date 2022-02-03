import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SendIcon from '@mui/icons-material/Send'
import { crearComentario } from '../../redux/middlewares/crearComentarios'
import { toast } from 'react-toastify';

const CrearComentario = () => {
  const { unParche } = useSelector(state => state.unParche)
  const { uid } = useSelector(state => state.auth)

  const [data, setData] = useState('')
  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault()
    if(data.length > 0 && data.length <= 256){
      const form = {
        userId: uid,
        parcheId: unParche.id,
        mensaje: data
      }
      dispatch(crearComentario(form))
      setData('')
    }
    else{
      toast.error('Superas el limite de caracteres', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });  
    }  
  }

  return (
    <>
      <form className='flex border-4 p-2 contenido'>
        <div className=' w-11/12'>
          <textarea id='textMensajeComentario' value={data} onChange={(e) => setData(e.target.value)} maxLength='256' className='w-11/12 p-2 resize-none' id='comentario' required name='comentario' type='text' placeholder='Escribe tu comentario...' />
        </div>
        <div>
          <button id='botonEnviarComentario' className='button' onClick={(e) => { submitForm(e) }}><SendIcon /></button>
        </div>
      </form>
    </>
  )
}

export default CrearComentario
