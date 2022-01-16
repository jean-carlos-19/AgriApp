import React from "react";
import { ImageBackground,Image, Text,View } from "react-native";
import {Portada_Estilo} from './Portada.Estilo';
import {imagenes} from "../../ayudantes";

const Portada = () => {

    const {contenedor,image,fondo} = Portada_Estilo;

    return (
        <View style={contenedor}>
            <Image  source={imagenes} resizeMode="cover" style={image} />
            <Text style={fondo}> </Text>
        
        </View>
    )
}




export {Portada};