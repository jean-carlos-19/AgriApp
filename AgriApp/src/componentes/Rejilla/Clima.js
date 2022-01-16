import React from 'react';
import { View,Text } from 'react-native';
import {Humedad,Luminocidad} from '../comun';
import {Clima_Estilo} from './Clima.Estilo';

const Clima = () => {

    const {contenedor,clima,caracteristica,texto,texto_pequeno} = Clima_Estilo;

    return (
        <View style={contenedor}>
            <View style={clima}>
                                
                <View style={caracteristica} >
                    <Humedad />
                    <Text style={texto_pequeno}> Humedad </Text>
                </View>

                <View style={caracteristica} >
                    <Luminocidad />
                    <Text style={texto_pequeno}> Luminocidad </Text>
                </View>

            </View>
            <View style={clima}>
                
                <View style={caracteristica} >
                    <Text style={texto} > {`100%`} </Text>
                    <Text style={texto_pequeno}> Temperatura </Text>
                </View>
                
                
                <View style={caracteristica} >
                    <Text style={texto}>4</Text>
                    <Text style={texto_pequeno}> Equipos</Text>
                </View>
        
            </View>
        </View>
    );
}

export {Clima}; 