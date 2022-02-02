import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'
import ListaParchesPage from './pages/private/ListaParchesPage'
import HomePagePublic from './pages/public/HomePagePublic'
import HomePagePrivate from './pages/private/HomePagePrivate'
import MisParchesPage from './pages/private/MisParchesPage'
import UnParchePagePrivate from './pages/private/UnParchePagePrivate'
import InicioSesion from './pages/private/InicioSesion'
import Registro from './pages/private/Registro'
import Perfil from './pages/private/VerPerfil'
import NotFound from './components/NotFound'
import CrearParchePage from './pages/private/CrearParchePage'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='inicio' element={<HomePagePublic />} />
            <Route path='inicio-sesion' element={<InicioSesion />} />
            <Route path='crear-cuenta' element={<Registro />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='/private' element={<PrivateLayout />}>
            <Route path='inicio' element={<HomePagePrivate />} />
            <Route path='parches' element={<ListaParchesPage />} />
            <Route path='Mi_perfil' element={<Perfil />} />
            <Route path='mis-parches/:usuarioId' element={<MisParchesPage />} />
            <Route path='detalle-parche/:id' element={<UnParchePagePrivate />} />
            <Route path='*' element={<NotFound />} />
            <Route path='mis-parches' element={<MisParchesPage />} />
            <Route path='editar-parche' element={<CrearParchePage />} />
            <Route path='parche/:id' element={<UnParchePagePrivate />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
