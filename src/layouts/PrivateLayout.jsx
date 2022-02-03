import Sidebar from '../components/private/Sidebar'
import Footer from '../components/public/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { app } from '../services/firebase'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerUsuario } from '../redux/middlewares/obtenerUsuario'

const PrivateLayout = () => {
  const state = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(obtenerUsuario(user.multiFactor.user.uid))
      } else {
        navigate('/')
      }
    })
  }, [])

  return (
    <>

      <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
        <Sidebar />
        <div className='flex w-full h-full'>
          <div className='w-full h-full overflow-y-scroll'>
            <div className='flex flex-col p-10'>
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default PrivateLayout
