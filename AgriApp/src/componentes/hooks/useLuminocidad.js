import { useState } from 'react'
import io from 'socket.io-client';

const useLuminocidad = ()=>{

    const [luminocidad,establecer_luminocidad] = useState("...");
    const socket = io("http://192.168.100.7:3001");
  
    socket.on("clima",(data)=>{
        
        data.forEach((elemento,i)=>{
            if(elemento === "L" && data[i-1] !== luminocidad)
                establecer_luminocidad(data[i-1]);
        });
    });

    return [luminocidad];
}

export {useLuminocidad};
