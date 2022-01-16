import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Home_Estilo = StyleSheet.create({
    home: {
      flex: 1,
      flexDirection:"column",
      justifyContent:'flex-start',
      alignItems:"flex-start",
      paddingTop:Constants.statusBarHeight,
      paddingTop:37,
      paddingLeft:16,
      paddingRight:16,
      backgroundColor: 'linear-gradient(162.29deg, rgba(204, 43, 94, 0.8) 0.89%, rgba(117, 58, 136, 0.8) 100.88%)',
    }
  });

  export {Home_Estilo};