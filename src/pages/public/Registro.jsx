import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import BotonInicioGoogle from '../../components/public/BotonInicioGoogle'


const Registro = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 5}}>
    {/* <AppBar sx={{bottom: 0 ,top: 'auto' }} position="absolute" color='success'> */}
        <Toolbar>
          <Box sx={{mx:'auto'}}>
          <Typography variant='h1'>
              Página de registro mis pais
            </Typography>
            <Typography variant='caption'>
              Aquí la maquina de maquinas de Ralph hace su formulario
            </Typography>
              <Box sx={{mt: 7 , m:'auto'}} style={{border: '1px solid red'}}>
                  <BotonInicioGoogle/>
              </Box>
          </Box>             
        </Toolbar>
    {/* </AppBar> */}
</Box>
  )
}

export default Registro
