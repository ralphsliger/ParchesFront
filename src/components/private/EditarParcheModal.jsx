import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const EditarParcheModal = ({open, handleClose, handleConfirm, msgModal,setNombre,nombre }) => {
  return <div>
           <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{msgModal.titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {msgModal.msg}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="input-name-editar"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            value={nombre}
            onChange={(e)=>{setNombre(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConfirm}>Actualizar</Button>
        </DialogActions>
      </Dialog>
  </div>;
};

export default EditarParcheModal;
