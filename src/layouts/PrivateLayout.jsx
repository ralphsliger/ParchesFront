
import { Button } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { app } from '../services/firebase'




const PrivateLayout = () => {
  
  const auth = app.auth() 
  const navigate = useNavigate();

  const handler = () =>{
    auth.signOut()
    navigate('/public/inicio-sesion')
  }
  
  return (
    <>
  <Button 
    onClick={handler}
    >
      Cerrar Sesión
    </Button>

      <Outlet />

    </>

  )
}
export default PrivateLayout

