import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPublicPage from './pages/public/TestPublicPage'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'
import ListaParchesPage from './pages/private/ListaParchesPage'

function App () {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='' element={<TestPublicPage />} />
          </Route>
          <Route path='/private' element={<PrivateLayout />}>
            <Route path='' element={<ListaParchesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
