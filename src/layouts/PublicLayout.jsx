
import { Outlet } from 'react-router-dom'
import BarraNavegacion from '../components/public/BarraNavegacion'
import Footer from './../components/public/Footer'

const PublicLayout = () => {
  return (
    <>
      <BarraNavegacion id='idNavBar' />
      <Outlet />
      <Footer id='idFooter' />
    </>
  )
}

export default PublicLayout
