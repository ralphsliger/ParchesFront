import React from 'react';
import '../Assents/Styles/HomePage.css'
import Letra1 from '../Assents/1-LetraE.png'
import Letra2 from '../Assents/2-LetraL.png'
import Letra3 from '../Assents/3-LetraP.png'
import Letra4 from '../Assents/4-LetraA.png'
import Letra5 from '../Assents/5-LetraR.png'
import Letra6 from '../Assents/6-LetraC.png'
import Letra7 from '../Assents/7-LetraH.png'
import Letra8 from '../Assents/8-LetraE2.png'
import ManoIzquierda from '../Assents/Mano1.png'
import ManoDerecha from '../Assents/Mano2.png'
import Exclamacion from '../Assents/Exclamacion.png'

const homePage = () => {
  return <div className='contenedor' >

    <div className='contenedor-animacion'>
    <img  src={ManoIzquierda}></img>
    <img  src={ManoDerecha}></img>
    <img  src={Exclamacion}></img>
    <div className='manos'></div>

    </div>
 
    <div className='contenedor-letras'>
    <img className='letras' src={Letra1}></img>
    <img className='letras' src={Letra2}></img>
    <div style={{width:'4%'}}></div>
    <img className='letras' src={Letra3}></img>
    <img className='letras' src={Letra4}></img>
    <img className='letras' src={Letra5}></img>
    <img className='letras' src={Letra6}></img>
    <img className='letras' src={Letra7}></img>
    <img className='letras' src={Letra8}></img>
    <span className='letras'></span>
 
    </div>
    <div>hola</div>
     </div>;
};

export default homePage;
