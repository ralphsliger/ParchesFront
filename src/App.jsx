import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPublicPage from './pages/public/TestPublicPage'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'
import ListaParchesPage from './pages/private/ListaParchesPage'
import HomePagePublic from './pages/public/HomePagePublic'
import HomePagePrivate from './pages/private/HomePagePrivate'
import MisParchesPage from './pages/private/MisParchesPage'
import UnParchePagePrivate from './pages/private/UnParchePagePrivate'
import InicioSesion from './components/public/InicioSesion'
import Registro from './components/public/Registro'
import NotFound from './components/NotFound'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='' element={<TestPublicPage />} />
            <Route path='home' element={<HomePagePublic />} />
            <Route path='inicio-sesion' element={<InicioSesion />} />
            <Route path='crear-cuenta' element={<Registro />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='/private' element={<PrivateLayout />}>
            <Route path='home' element={<HomePagePrivate />} />
            <Route path='parches' element={<ListaParchesPage />} />
            <Route path='mis-parches/:usuarioId' element={<MisParchesPage />} />
            <Route path='detalle-parche/:id/:usuarioId' element={<UnParchePagePrivate />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
