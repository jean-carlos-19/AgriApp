import {StyleSheet} from "react-native";

const Portada_Estilo = StyleSheet.create({
    contenedor: {
      position:"relative",
      width:"100%",
      height:"29.53%",
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius:16
    },
    fondo:{
      position:"absolute",
      top:0,
      width:"100%",
      height:"100%",
      backgroundColor:"rgba(44, 36, 36, 0.35)",
      borderRadius:16
    }

  });

  export {Portada_Estilo};