import { Outlet } from 'react-router-dom'
import BarraNavegacion from '../components/public/BarraNavegacion'
import Footer from './../components/public/Footer'

const PublicLayout = () => {
  return (
    <>
      <BarraNavegacion />
      <Outlet />
    </>
  )
}

export default PublicLayout
