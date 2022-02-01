import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPagePrivate from './pages/private/TestPagePrivate'
import Registro from './pages/public/Registro'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'
import IniciarSesion from './pages/public/IniciarSesion'
import MisParchesPage from './pages/private/MisParchesPage'
import UnParchePagePrivate from './pages/private/UnParchePagePrivate'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='crear-cuenta' element={<Registro />} />
            <Route path='inicio-sesion' element={<IniciarSesion />} />
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
