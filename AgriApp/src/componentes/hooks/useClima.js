import { useState } from 'react'
import io from 'socket.io-client';

const useClima = ()=>{
    const [humedad,estabelecer_humedad] = useState("cargando...");
    const [luminocidad,establecer_luminocidad] = useState("cargando...");


    
 

    return [humedad,luminocidad];
}

export {useClima};
