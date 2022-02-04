import { Typography, Box } from '@mui/material'

const NotFound = () => {
  return (
    <Box sx={{ mx: 'auto' }} mb={21} mt={8}>
      <Typography variant='h6' color='primary' textAlign='center'>La página no fue encontrada, porfavor escriba una URL valida.</Typography>
      <Box display='flex' justifyContent='center'>
        <img src='https://miracomosehace.com/wp-content/uploads/2020/07/http-404-not-found.jpg' alt='' width={680} />
      </Box>
    </Box>
  )
}

export default NotFound
