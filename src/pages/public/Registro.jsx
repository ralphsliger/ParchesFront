import React,{ useState, useEffect } from 'react'
import { registrarUsuario } from '../../utils/registro/registrarUsuario'
import { useSelector, useDispatch } from 'react-redux';
import { registroFallido, registroExitoso } from '../../redux/actions/registro/registroActions';
//import registroReducer from '../../redux/reducers/registroReducer';

const Registro = () => {

    const dispatch = useDispatch();
    const error = useSelector((state) => state.registro.error);
    console.log(error);

    const [ state, setState ] = useState({
        nombre: "",
        email: "",
        password: "",
        confPassword: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(state);
        let expRegEmail = new RegExp('^[^@]+@[^@]+\\.[a-zA-Z]{2,}$');
        let result = expRegEmail.test(state.email);
        console.log("resultado: ",result);
        if(!result){
            dispatch(registroFallido("El email debe tener la siguiente estructura: correo@email.com"))
        }else{
            const usuario = await registrarUsuario(state.email, state.password, state.nombre);
            dispatch(registroExitoso(usuario.uid, state.email, state.nombre));
        }
    }

    useEffect(() => {

    },[dispatch, error])

    return (
        <div>
            <h1>Registrar Usuario</h1>
            <form onSubmit={onSubmit}>

                <input type="text" id="nombre" onChange={(e)=>{
                    setState({...state, nombre: e.target.value})
                }} placeholder='Nombre' maxLength={50} required={true} autoComplete='on'/>

                <input type="email" id="email" placeholder='correo@email.com' onChange={(e)=>{
                    setState({...state, email: e.target.value})
                }} required={true} autoComplete='on'/>
                {/*error !== null ? (
                    <span>{error}</span>
                ):(null)*/}

                <input type="password" id="password" placeholder='Contraseña' onChange={(e) => {
                    setState({...state, password: e.target.value})
                }} maxLength={20} minLength={6} required={true}/>

                <input type="password" id="confPassword" placeholder='Verificar Contraseña' onChange={(e) => {
                    setState({...state, confPassword: e.target.value})
                }} required={true}/>

                <button type='submit'>Crear Cuenta</button>
            </form>
        </div>
    )
}

export default Registro
