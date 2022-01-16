import React from 'react'
import { Text } from 'react-native';
import {Barra_Estilo} from "./Barra.Estilo.js";

const Barra = () => {
    const {barra} = Barra_Estilo;
    return(
        <Text style={barra}></Text>
    );
}

export {Barra}; 