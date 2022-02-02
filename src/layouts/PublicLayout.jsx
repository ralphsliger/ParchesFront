
import { Box } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import BarraNavegacion from '../components/public/BarraNavegacion'
import { app } from '../services/firebase'
import Footer from './../components/public/Footer'
import { obtenerUsuario } from '../redux/middlewares/obtenerUsuario'

const PublicLayout = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    app.auth().onAuthStateChanged((usuario) => {
      if (usuario) {
        const uid = usuario.multiFactor.user.uid
        dispatch(obtenerUsuario(uid))
        navigate('/private')
      }
    })
  }, [])

  return (
    <div className="posi">
      <BarraNavegacion id='idNavBar' />
      <Outlet />
      <Footer id='idFooter' />
    </div>
  )
}

export default PublicLayout
