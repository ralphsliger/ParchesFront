import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Typography from "@mui/material/Typography";
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import IconButton from '@mui/material/IconButton'
import EditarParcheModal from '../../components/private/EditarParcheModal';
import { useDispatch } from 'react-redux';
import { actualizarHombre } from '../../redux/middlewares/actualizarNombre';
const VerPerfil = () => {
    const auth = useSelector(state=>state.auth)
    const [open, setOpen] = useState(false);
    const [nombre, setNombre] = useState(auth.nombre);
    const dispatch=useDispatch();
    const msgModal = {
      msg: "Ingrese el nombre nuevo",
      titulo: "Actualizar nombre",
    };

    useEffect(()=>{
      setNombre(auth.nombres)
    },[])

    const editarPerfil=(id)=>{
      setOpen(true);
  }  

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleConfirm = () => {
      const usuario={
        "id":auth.id,
        "email":auth.email,
        "imagenUrl":auth.imagenUrl,
        "nombres": nombre,
        "uid":auth.uid
      }
      dispatch(actualizarHombre(usuario))
      setOpen(false);
      
    }

  return (  <div>
    <div><Typography variant='h3' color='primary'>Perfíl</Typography></div>
    <img id='img-perfil' style={{ width: '80px', margin: '20px' }} src={auth.imagenUrl} className='rounded-full' />
    <div style={{margin:"10px"}}>
        <Typography variant='h5' color='primary' >Correo</Typography>
        {auth.email && <Typography id="txt-email" variant='h7' >{auth.email}</Typography>}
    </div>
    <div style={{margin:"10px"}}>
        <Typography variant='h5' color='primary'>Nombre</Typography>
        {auth.nombres && <Typography id="txt-nombre" variant='h7'>{auth.nombres}</Typography>}
        <IconButton id="btn-editarPerfil" color='primary' onClick={()=>editarPerfil()}><ModeEditIcon/></IconButton> 
        </div>
        <EditarParcheModal
          nombre={nombre}
          setNombre={setNombre}
          msgModal={msgModal}
          open={open}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        ></EditarParcheModal>

    </div>
  )
}

export default VerPerfil
