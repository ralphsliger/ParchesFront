import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import BotonRegistroGoogle from '../../components/public/BotonRegistroGoogle'


const Registro = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 5}} className='posi'>
    {/* <AppBar sx={{bottom: 0 ,top: 'auto' }} position="absolute" color='success'> */}
        <Toolbar>
          <Box sx={{mx:'auto'}}>
          <Typography variant='h1'>
              Página de registro mis pais
            </Typography>
            <Typography variant='caption'>
              Aquí la maquina de maquinas de Ralph hace su formulario PARA REGISTRAR USUARIO
            </Typography>
              <Box sx={{mt: 7 , mx:'auto'}}>
                  <BotonRegistroGoogle/>
              </Box>
          </Box>             
        </Toolbar>
    {/* </AppBar> */}
</Box>
  )
}

export default Registro
