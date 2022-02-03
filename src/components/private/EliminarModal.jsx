import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function EliminarModal({ open, handleClose, handleConfirm, msgModal }) {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            {msgModal.titulo}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{msgModal.msg}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button id='botonCancelarEliminacionComentario' autoFocus onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button id='botonAceptarEliminacionComentario' onClick={handleConfirm} color="primary">
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

export default EliminarModal;
