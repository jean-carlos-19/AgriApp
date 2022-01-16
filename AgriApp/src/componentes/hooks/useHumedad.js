import { useState } from 'react'
import io from 'socket.io-client';

const useHumedad = ()=>{
    const [humedad,estabelecer_humedad] = useState("...");
    const socket = io("http://192.168.100.7:3001")

    socket.on("clima",(data)=>{
        
        data.forEach((elemento,i)=>{
            if(elemento === "H" && data[i-1] !== humedad  )
                estabelecer_humedad(data[i-1]);
        });
    });


    
    return [humedad,];
}

export {useHumedad};
