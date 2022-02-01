import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        '&:hover':{
        background: 'linear-gradient(45deg, #f58442ff 30%, #f58442ff 90%)', 
        color: 'white',
        }
    },
  });

export default function BarraNavegacion() {
    
    const classes = useStyles();

    return (

        <Box sx={{ flexGrow: 1, boxShadow: 2, mb: 15 }}>
            <AppBar position="fixed" color='secondary'>
                <Toolbar>
                    <Link to="/inicio">
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="logo"
                            sx={{ ml: 3 }}
                        >
                            <img src="https://firebasestorage.googleapis.com/v0/b/parches-62cbd.appspot.com/o/LogoParches.png?alt=media&token=fc16727f-e73d-4ce5-adb4-a348592663cf" alt="..." width="150px" />
                        </IconButton> 
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Button id="botonInicioNavBar" component={Link} to="/inicio" variant='contained' color="primary" sx={{mr: 2}} className={classes.root} startIcon={<HomeRoundedIcon />}>Inicio</Button>
                    <Button id="botonInicioSesionNavBar" component={Link} to="/inicio-sesion" variant='contained' color="primary" sx={{mr: 2}} className={classes.root} startIcon={<LoginRoundedIcon />}>Inicio de sesión</Button>
                    <Button id="botonCrearCuentaNavBar" component={Link} to="/crear-cuenta" variant='contained' color="primary" className={classes.root} startIcon={<HowToRegRoundedIcon />}>Crear Cuenta</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}