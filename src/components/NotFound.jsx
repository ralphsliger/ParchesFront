import { Typography } from '@mui/material'

const NotFound = () => {
  return (
    <>

      <div className='container'>
        <div className='text-center'>
          <Typography variant='h3'>La página no fue encontrada, porfavor escriba una URL valida.</Typography>
          <img src='https://miracomosehace.com/wp-content/uploads/2020/07/http-404-not-found.jpg' className='img-fluid' alt='Not found' />
        </div>
      </div>
    </>
  )
}

export default NotFound
