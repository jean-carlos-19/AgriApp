import React from 'react';
import { View } from 'react-native';
import {Home_Estilo} from './Home.Estilo';
import {Portada,Barra} from '../componentes/comun';
import { Clima } from '../componentes/Rejilla';

const Home = ()=> {
  
  const {home} = Home_Estilo;

  return (
    <View style={home}>
      <Portada />
      <Barra />
      <Clima />
    </View>
  );
}




export {Home};