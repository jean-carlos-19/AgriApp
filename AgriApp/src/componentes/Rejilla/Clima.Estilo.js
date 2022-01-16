import { StyleSheet } from 'react-native';

const Clima_Estilo = StyleSheet.create({
    contenedor:{
       width:"100%",
       height:"40.75%",
    },
    clima:{
        marginTop:32,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    caracteristica:{
        width:"47.77%",
        height:"100%",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(44, 36, 36, 0.35)",
        borderRadius:16,
    },
    texto:{
        fontFamily:"Roboto",
        fontSize:48,
        color:"#F2F2F2",
    },
    texto_pequeno:{
        fontFamily:"Roboto",
        fontWeight:"400",
        fontSize:16,
        color:"#F2F2F2",
    }
});
export {Clima_Estilo};