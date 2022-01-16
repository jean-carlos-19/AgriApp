const SerialPort = require("serialport");
const {Conexion_DB} = require("./Mysql");
const conexion = new Conexion_DB();
const {conversion_analogica} = require('../Ayudantes');

const crear_conexion_DB=()=>{
    conexion.crear_conexion();
}

const crear_conexion_arduino = (io)=>{

    const Leer_linea = SerialPort.parsers.Readline;
    const Arduino = new SerialPort("/dev/ttyACM0",{baudRate:9600});
    const analizador = Arduino.pipe(new Leer_linea({delimiter:"\r\n"}));
    
    crear_conexion_DB();
    
    analizador.on("data",(data)=>{
    
        const array_porcentual = conversion_analogica(data);

        io.on("connection",(socket)=>{
            
           // console.log({estado:"entrada",ip:socket.handshake.address});
            socket.emit("clima",array_porcentual);
            
        });

        io.on("disconnect",(socket)=>{
           // console.log({estado:"entrada",ip:socket.handshake.address});
        });

        console.log(array_porcentual);
        // conexion.registrar_ambiente(conversion);
    });
}

module.exports = {crear_conexion_arduino};