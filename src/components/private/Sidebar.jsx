import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import CrearParcheModal from './CrearParcheModal/CrearParcheModal'
import { app } from '../../services/firebase'
import { cerrarSesion } from '../../redux/actions/authActions'
import { useDispatch } from 'react-redux'

const Logo = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-10 '>
      <img className=' w-28 h-28' src='https://firebasestorage.googleapis.com/v0/b/parches-62cbd.appspot.com/o/IconoParches.png?alt=media&token=076fdafd-4be9-418d-8aa3-ffe44b0c9044' />
    </div>
  )
}

const Sidebar = () => {
  const auth = app.auth()
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handler = () => {
    auth.signOut()
    dispatch(cerrarSesion())
    navigate('/public')
  }

  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      <div className='sidebar hidden md:flex w-56 ml-6 my-3 '>
        <div className='w-full h-full flex flex-col'>
          <Logo />
          <CrearParcheModal />
          <ul className='h-full flex flex-col '>
            <SidebarRoute to='inicio' title='Home' icon='fas fa-home fa-lg' />
            <SidebarRoute to='Mi_perfil' title='Mi perfil' icon='fas fa-user-cog fa-lg' />
            <SidebarRoute to='mis-parches' title='Mis parches' icon='fas fa-people-arrows fa-lg' />
            <SidebarRoute to='parches' title='Parches' icon='fas fa-users fa-lg' />
            <div className=' flex flex-col text-white h-full justify-end mb-12 mx-4 '>
              <li className=' sidebar-route-disable sidebar-route' to='/'>
                {/* <NavLink
                  onClick={() => {
                  }}
                > */}
                <div className='flex' onClick={handler}>
                  <LogoutRoundedIcon className='text-white ' />
                  <span className='text-sm self-center ml-2 font-semibold'>Cerrar Sesión</span>
                </div>
                {/* </NavLink> */}
              </li>

            </div>
          </ul>
        </div>
      </div>
      <div className='flex md:hidden w-2 justify-between bg-gray-800 p-2 text-white'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
    </div>
  )
}

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
        </div>
      </div>
    </div>
  )
}

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li className=' mx-4 mb-3 text-xs'>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route sidebar-route-active text-white '
            : 'sidebar-route sidebar-route-disable  text-white hover:text-white '}
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm ml-2 font-semibold'>{title}</span>

        </div>
      </NavLink>
    </li>
  )
}

export default Sidebar
