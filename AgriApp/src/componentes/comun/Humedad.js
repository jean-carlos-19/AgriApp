import React from 'react'
import { Text } from 'react-native'
import {Clima_Estilo} from './Clima.Estilo';
import {useHumedad} from '../hooks';

const Humedad =()=> {

    const [humedad] = useHumedad();
    const {texto} = Clima_Estilo;

    return (
       
            <Text style={texto}>{`${humedad}%`}</Text>
    )
}


export {Humedad} 

