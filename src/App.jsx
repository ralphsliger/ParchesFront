import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPublicPage from './pages/public/TestPublicPage'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'
import ListaParchesPage from './pages/private/ListaParchesPage'
import HomePage from './pages/HomePage'
import MisParchesPage from './pages/private/MisParchesPage'
import UnParchePagePrivate from './pages/private/UnParchePagePrivate'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='' element={<TestPublicPage />} />
            <Route path='home' element={<HomePage />} />
          </Route>
          <Route path='/private' element={<PrivateLayout />}>
            <Route path='parches' element={<ListaParchesPage />} />
            <Route path='mis-parches/:usuarioId' element={<MisParchesPage />} />
            <Route path='detalle-parche/:id/:usuarioId' element={<UnParchePagePrivate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
