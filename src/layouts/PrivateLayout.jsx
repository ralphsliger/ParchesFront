
import Sidebar from '../components/private/Sidebar'
import Footer from '../components/public/Footer'
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
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <Sidebar />
      <div className='flex w-full h-full'>
        <div className='w-full h-full overflow-y-scroll '>
          <div className='flex flex-col p-10'>
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PrivateLayout
