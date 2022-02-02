import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import Typography from "@mui/material/Typography";
import ManoIzquierda from '../../Assents/Mano1.png'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton'
import EditarParcheModal from '../../components/private/EditarParcheModal';

const VerPerfil = () => {

    const auth = useSelector(state=>state.auth)
    const [open, setOpen] = useState(false);
    console.log(auth);
    const msgModal = {
      msg: "Ingrese aceptar para actualizar el nombre",
      titulo: "Actualizar nombre",
    };

    const editarPerfil=(id)=>{
      console.clear();
      setOpen(true);
  }  

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleConfirm = () => {
      setOpen(false);
    }

  return (  <div>
    <div><Typography variant='h3' color='primary'>Perfíl</Typography></div>
    <img style={{width:"80px",margin:"20px"}} src={ManoIzquierda}></img>
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
          msgModal={msgModal}
          open={open}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        ></EditarParcheModal>
    </div>
    )
};

export default VerPerfil;
