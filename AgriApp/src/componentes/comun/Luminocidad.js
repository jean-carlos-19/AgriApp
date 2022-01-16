import React from 'react';
import { Text } from 'react-native'
import {Clima_Estilo} from './Clima.Estilo';
import {useLuminocidad} from '../hooks';

const Luminocidad =()=> {

    const [luminocidad] = useLuminocidad();
    const {texto} = Clima_Estilo;

    return (<Text style={texto} > {`${luminocidad}%`} </Text>);
}


export {Luminocidad} 

