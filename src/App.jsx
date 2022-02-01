import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPagePrivate from './pages/private/TestPagePrivate'
import TestPublicPage from './pages/public/TestPublicPage'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'
import HomePagePublic from './pages/public/HomePagePublic'
import HomePagePrivate from './pages/private/HomePagePrivate'
import MisParchesPage from './pages/private/MisParchesPage'
import UnParchePagePrivate from './pages/private/UnParchePagePrivate'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='' element={<TestPublicPage />} />
            <Route path='home' element={<HomePagePublic />} />
          </Route>
          <Route path='/private' element={<PrivateLayout />}>
            <Route path='home' element={<HomePagePrivate />} />
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
