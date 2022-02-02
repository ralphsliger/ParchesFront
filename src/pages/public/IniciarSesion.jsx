import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import BotonIniciarGoogle from '../../components/public/BotonIniciarGoogle'


const IniciarSesion = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 5}} className='posi'>
        <Toolbar>
          <Box sx={{mx:'auto'}}>
          <Typography variant='h1'>
              Página de registro mis pais
            </Typography>
            <Typography variant='caption'>
              Aquí la maquina de maquinas de Ralph hace su formulario PARA INICIAR SESIÖN
            </Typography>
              <Box sx={{mt: 7 , mx:'auto'}}>
                  <BotonIniciarGoogle/>
              </Box>
          </Box>             
        </Toolbar>
    </Box>
  )
}

export default IniciarSesion