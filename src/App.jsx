import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPagePrivate from './pages/private/TestPagePrivate'
import TestPublicPage from './pages/public/TestPublicPage'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'
import HomePage from './pages/HomePage'
import MisParchesPage from './pages/private/MisParchesPage'
import UnParchePagePrivate from './pages/private/UnParchePagePrivate'
import InicioSesion from './pages/public/InicioSesion'
import Registro from './pages/public/Registro'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='' element={<TestPublicPage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='inicio-sesion' element={<InicioSesion />} />
            <Route path='crear-cuenta' element={<Registro />} />
          </Route>
          <Route path='/private' element={<PrivateLayout />}>
            <Route path='mis-parches' element={<MisParchesPage />} />
            <Route path='' element={<TestPagePrivate />} />
            <Route path='parche/:id' element={<UnParchePagePrivate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
