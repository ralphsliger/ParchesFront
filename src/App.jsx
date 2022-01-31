import { app, google } from './services/firebase'

function App () {
  const handler = () => {
    app.auth().signInWithPopup(google)
      .then(user => {
        console.log(user)
      })
  }

  return (
    <>
      <h1 className='text-9xl'>test</h1>
      <button onClick={handler}>Login</button>
    </>

  )
}

export default App
