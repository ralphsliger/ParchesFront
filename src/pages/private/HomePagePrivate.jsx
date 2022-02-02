import React from 'react'
import '../../Assents/Styles/HomePage.css'
import Letra1 from '../../Assents/1-LetraE.png'
import Letra2 from '../../Assents/2-LetraL.png'
import Letra3 from '../../Assents/3-LetraP.png'
import Letra4 from '../../Assents/4-LetraA.png'
import Letra5 from '../../Assents/5-LetraR.png'
import Letra6 from '../../Assents/6-LetraC.png'
import Letra7 from '../../Assents/7-LetraH.png'
import Letra8 from '../../Assents/8-LetraE2.png'
import ManoIzquierda from '../../Assents/Mano1.png'
import ManoDerecha from '../../Assents/Mano2.png'
import Exclamacion from '../../Assents/Exclamacion.png'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

const HomePagePrivate = () => {
  return (
    <div className='contenedor'>

      <div className='contenedor-animacion'>
        <img src={ManoIzquierda} />
        <img src={ManoDerecha} />
        <img src={Exclamacion} />
        <div className='manos' />

      </div>

      <div className='contenedor-letras'>
        <img className='letras' src={Letra1} />
        <img className='letras' src={Letra2} />
        <div style={{ width: '4%' }} />
        <img className='letras' src={Letra3} />
        <img className='letras' src={Letra4} />
        <img className='letras' src={Letra5} />
        <img className='letras' src={Letra6} />
        <img className='letras' src={Letra7} />
        <img className='letras' src={Letra8} />
        <span className='letras' />

      </div>
      <Box
        sx={{
          width: 800,
          alignItems: 'center',
          mb: 10
        }}
      >
        <Typography
          component='h2'
          variant='h6'
          style={{ margin: '50px 20px 40px 20px' }}
          color='secondary'
          align='justify'
        >¡El parche, un lugar donde puedes crear eventos y parchar con sofkianos con tus mismos gustos, te esperamos para tener momentos que deberian ser eternos!
        </Typography>
        <Typography
          component='h2'
          variant='h4'
          style={{ margin: '20px 20px 20px 20px' }}
          color='primary'
        >Descripción</Typography>
        <Typography
          component='h2'
          variant='h6'
          style={{ margin: '20px 20px 60px 20px' }}
          color='secondary'
          align='justify'
        >El proyecto permitirá el acceso a cualquier Sofkiano Colaborador; como buscar un evento, indicar la asistencia y visualización de quienes van a participar, pertenecer a una o varias comunidades donde se realicen eventos constantemente logrando enlazar la mayor cantidad de personas con gustos similares, y con el tiempo filtrar cual será el próximo evento en la ubicación más cercana según donde se encuentre el usuario.</Typography>
      </Box>
    </div>
  )
}

export default HomePagePrivate
