import { Typography, Box } from '@mui/material'

const NotFound = () => {
  return (
    <Box sx={{ mx: 'auto' }} mb={21}>
      <Typography variant='h3'>La página no fue encontrada, porfavor escriba una URL valida.</Typography>
      <Box display='flex' justifyContent='center'>
        <img src='https://miracomosehace.com/wp-content/uploads/2020/07/http-404-not-found.jpg' alt='' />
      </Box>
    </Box>
  )
}

export default NotFound
