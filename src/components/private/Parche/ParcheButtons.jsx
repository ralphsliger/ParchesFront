/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import { Stack, Button, Backdrop, Modal, Fade, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  MoreHoriz as MoreHorizIcon,
  Block as BlockIcon,
  ErrorOutline as ErrorOutlineIcon
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

function ParcheButtons({ parche }) {
  const [openBorrar, setOpenBorrar] = useState(false)
  const handleOpenBorrar = () => setOpenBorrar(true)
  const handleCloseBorrar = () => setOpenBorrar(false)
  const { uid } = useSelector((state) => state.auth)

  const handleBorrar = () => {
    setOpenBorrar(false)
    console.log('borrando')
  }

  const [openDeshabilitar, setOpenDeshabilitar] = useState(false)
  const handleOpenDeshabilitar = () => setOpenDeshabilitar(true)
  const handleCloseDeshabilitar = () => setOpenDeshabilitar(false)
  const handleDeshabilitar = () => {
    setOpenDeshabilitar(false)
    console.log('deshabilitando')
  }

  return (
    <Stack height={35} direction='row' spacing={2}>
      <Link to={`/private/editar-parche/${parche.id}`}>
        <Button id='boton-editar-parche' size='small' variant='contained' startIcon={<EditIcon />}>
          Editar
        </Button>
      </Link>

      <Button
        onClick={handleOpenBorrar}
        id='boton-borrar-parche'
        size='small'
        variant='contained'
        startIcon={<DeleteIcon />}
      >
        Borrar
      </Button>

      {0 ? (
        <Button
          id='boton-habilitar-parche'
          size='small'
          variant='contained'
          startIcon={<CheckCircleIcon />}
        >
          Habilitar
        </Button>
      ) : (
        <Button
          onClick={handleOpenDeshabilitar}
          id='boton-deshabilitar-parche'
          size='small'
          variant='contained'
          startIcon={<BlockIcon />}
        >
          Deshabilitar
        </Button>
      )}

      <Link to={`/private/detalle-parche/${parche.id}/${uid}`}>
        <Button
          id='boton-verMas-parche'
          color='info'
          size='small'
          variant='contained'
          startIcon={<MoreHorizIcon />}
        >
          Ver Más
        </Button>
      </Link>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={openBorrar}
        onClose={handleCloseBorrar}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openBorrar}>
          <Stack sx={style} spacing={3}>
            <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
              <ErrorOutlineIcon sx={{ color: '#d50000', fontSize: 35 }} size='small' />
              <Typography
                textAlign='center'
                color='#d50000'
                id='transition-modal-title'
                variant='h4'
                component='h2'
              >
                Cuidado!
              </Typography>
            </Stack>
            <Typography
              fontSize={20}
              textAlign='center'
              id='transition-modal-description'
              sx={{ mt: 2 }}
            >
              Estas seguro de realizar esta acción?
            </Typography>
            <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
              <Button
                onClick={handleBorrar}
                id='boton-verMas-parche'
                color='secondary'
                size='small'
                variant='contained'
              >
                Si
              </Button>
              <Button
                onClick={handleCloseBorrar}
                id='boton-verMas-parche'
                color='primary'
                size='small'
                variant='contained'
              >
                No
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={openDeshabilitar}
        onClose={handleCloseDeshabilitar}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openDeshabilitar}>
          <Stack sx={style} spacing={3}>
            <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
              <ErrorOutlineIcon sx={{ color: '#d50000', fontSize: 35 }} size='small' />
              <Typography
                textAlign='center'
                color='#d50000'
                id='transition-modal-title'
                variant='h4'
                component='h2'
              >
                Cuidado!
              </Typography>
            </Stack>
            <Typography
              fontSize={20}
              textAlign='center'
              id='transition-modal-description'
              sx={{ mt: 2 }}
            >
              Estas seguro de realizar esta acción?
            </Typography>
            <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
              <Button
                onClick={handleDeshabilitar}
                id='boton-verMas-parche'
                color='secondary'
                size='small'
                variant='contained'
              >
                Si
              </Button>
              <Button
                onClick={handleCloseDeshabilitar}
                id='boton-verMas-parche'
                color='primary'
                size='small'
                variant='contained'
              >
                No
              </Button>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </Stack>
  )
}

export default ParcheButtons
