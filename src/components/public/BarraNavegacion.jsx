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
import { Link } from 'react-router-dom';

export default function BarraNavegacion() {
    return (
        <Box sx={{ flexGrow: 1, boxShadow: 2 }}>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="logo"
                        sx={{ ml: 3 }}
                    >
                        <img src="https://firebasestorage.googleapis.com/v0/b/parches-62cbd.appspot.com/o/LogoParches.png?alt=media&token=fc16727f-e73d-4ce5-adb4-a348592663cf" alt="..." width="150px" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Button component={Link} to="/inicio" variant='contained' color="primary" sx={{mr: 2}} startIcon={<HomeRoundedIcon />}>Inicio</Button>
                    <Button component={Link} to="/inicio-sesion" variant='contained' color="primary" sx={{mr: 2}} startIcon={<LoginRoundedIcon />}>Inicio de sesión</Button>
                    <Button component={Link} to="/crear-cuenta" variant='contained' color="primary" startIcon={<HowToRegRoundedIcon />}>Crear Cuenta</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}