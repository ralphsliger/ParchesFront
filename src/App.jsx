import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestPagePrivate from './pages/private/TestPagePrivate'
import TestPublicPage from './pages/public/TestPublicPage'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from './layouts/PrivateLayout'

function App () {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/public' element={<PublicLayout />}>
            <Route path='' element={<TestPublicPage />} />
          </Route>
          <Route path='/private' element={<PrivateLayout />}>
            <Route path='' element={<TestPagePrivate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
