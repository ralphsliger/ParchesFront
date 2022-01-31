
function App () {
  const test = import.meta.env.VITE_TEST || 123
  return (
    <>
      <h1 className='text-9xl'>test</h1>
      <h2>{test}</h2>
    </>

  )
}

export default App
