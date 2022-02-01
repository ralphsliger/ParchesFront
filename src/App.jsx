import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPagePrivate from './pages/private/TestPagePrivate'
import TestPublicPage from './pages/public/TestPublicPage'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'
import MisParchesPage from './pages/private/MisParchesPage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='' element={<TestPublicPage />} />
          </Route>
          <Route path='/private' element={<PrivateLayout />}>
            <Route path='mis-parches' element={<MisParchesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
