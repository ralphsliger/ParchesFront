import React,{ useState, useEffect } from 'react'
import { registrarUsuario } from '../../utils/registro/registrarUsuario'
import { useSelector, useDispatch } from 'react-redux';
import { registroFallido, registroExitoso } from '../../redux/actions/registro/registroActions';
import { styles } from '../../utils/registro/styles'
import { useNavigate } from "react-router-dom";
import { validaciones } from '../../utils/registro/validaciones';

const Registro = () => {

    const dispatch = useDispatch();
    const error = useSelector((state) => state.registro.error);

    const navigate = useNavigate();

    const [ state, setState ] = useState({
        nombre: "",
        email: "",
        password: "",
        confPassword: "",
        habilitar: true
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        
        let validacion = validaciones(state.nombre, state.email, state.password, state.confPassword);

        if(typeof validacion === 'string'){
            dispatch(registroFallido(validacion));
        }else{
            const usuario = await registrarUsuario(state.email, state.password, state.nombre);
            console.log(usuario)
            if(typeof usuario === 'object'){
                dispatch(registroExitoso(usuario.data.uid, state.email, state.nombre))
                navigate("/private");
            }else{
                dispatch(registroFallido(usuario));
            }
        } 
    }

    useEffect(() => {},[dispatch, error])

    return (
        <div className='text-center'>
            <h1 color='#140d4fff' style={{fontSize: '130%', marginBottom: '5px'}} >Registrate y comienza a parchar</h1>
            <form onSubmit={onSubmit}>
                
                <input style={styles.input} type="text" id="nombre" onChange={(e)=>{
                    setState({...state, nombre: e.target.value})
                }} placeholder='Nombre' maxLength={50} required={true} autoComplete='on'/>
                <br />
                <input style={styles.input} type="email" id="email" placeholder='correo@email.com' onChange={(e)=>{
                    setState({...state, email: e.target.value})
                }} required={true} autoComplete='on'/>
                <br />
                <input style={styles.input} type="password" id="password" placeholder='Contraseña' onChange={(e) => {
                    setState({...state, password: e.target.value})
                }} required={true}/>
                <br />
                <input style={styles.input} type="password" id="confPassword" placeholder='Verificar Contraseña' onChange={(e) => {
                    setState({...state, confPassword: e.target.value})
                }} required={true}/>
                <br />
                <button style={styles.button} type='submit' disabled={(state.nombre && state.email && state.password && state.confPassword) ? false : true}>Crear Cuenta</button>
            </form>
            {error !== null ? (
                <span>{error}</span>
            ):(null)}
        </div>
    )
}

export default Registro
