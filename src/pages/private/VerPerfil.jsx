import React from 'react';
import { useSelector } from 'react-redux';

const VerPerfil = () => {

    const auth = useSelector(state=>state.auth)

    console.log(auth);


  return <div>{auth.email && <h1>{auth.email}</h1>}</div>;
};

export default VerPerfil;
