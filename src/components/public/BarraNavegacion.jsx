import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded'
import { Link } from 'react-router-dom'
import useStyles from './../../utils/materialStyles'

export default function BarraNavegacion() {
  const classes = useStyles()

  return (

    <Box sx={{ flexGrow: 1, boxShadow: 2, }}>
      <AppBar position='relative' color='secondary'>
        <Toolbar>
          <Link to='inicio'>
            <IconButton
              size='large'
              edge='start'
              aria-label='logo'
              sx={{ ml: 3 }}
            >
              <img src='https://firebasestorage.googleapis.com/v0/b/parches-62cbd.appspot.com/o/LogoParches.png?alt=media&token=28be755d-a4fe-4aea-9dfb-a61abece9b17' alt='...' width='150px' />
            </IconButton>
          </Link>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} />
          <Button id='botonInicioNavBar' component={Link} to='' variant='contained' color='primary' sx={{ mr: 2 }} className={classes.root} startIcon={<HomeRoundedIcon />}>Inicio</Button>
          <Button id='botonInicioSesionNavBar' component={Link} to='inicio-sesion' variant='contained' color='primary' sx={{ mr: 2 }} className={classes.root} startIcon={<LoginRoundedIcon />}>Inicio de sesión</Button>
          <Button id='botonCrearCuentaNavBar' component={Link} to='crear-cuenta' variant='contained' color='primary' className={classes.root} startIcon={<HowToRegRoundedIcon />}>Crear Cuenta</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
