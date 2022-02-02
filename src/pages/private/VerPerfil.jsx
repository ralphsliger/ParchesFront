import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Typography from "@mui/material/Typography";
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import IconButton from '@mui/material/IconButton'
import EditarParcheModal from '../../components/private/EditarParcheModal';

const VerPerfil = () => {
    const auth = useSelector(state=>state.auth)
    const [open, setOpen] = useState(false);
    const [nombre, setNombre] = useState(auth.nombres);

    const msgModal = {
      msg: "Ingrese el nombre nuevo",
      titulo: "Actualizar nombre",
    };

    useEffect(()=>{
      setNombre(auth.nombres)
    },[])

    const editarPerfil=(id)=>{
      console.clear();
      setOpen(true);
  }  

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleConfirm = () => {
      const usuario={
        "email":auth.email,
        "imagenUrl":auth.imagenUrl,
        "nombres": nombre,
        "uid":auth.uid
      }
      console.log(usuario);

      setOpen(false);
      
    }

  return (  <div>
    <div><Typography variant='h3' color='primary'>Perfíl</Typography></div>
    <img style={{ width: '80px', margin: '20px' }} src={auth.imagenUrl} className='rounded-full' />
    <div style={{margin:"10px"}}>
        <Typography variant='h5' color='primary' >Correo</Typography>
        {auth.email && <Typography variant='h7' >{auth.email}</Typography>}
    </div>
    <div style={{margin:"10px"}}>
        <Typography variant='h5' color='primary'>Nombre</Typography>
        {auth.nombres && <Typography variant='h7'>{auth.nombres}</Typography>}
        <IconButton color='primary' onClick={()=>editarPerfil()}><ModeEditIcon/></IconButton> 
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
