const SerialPort = require("serialport");
const {Server} = require("socket.io");
const {Conexion_DB} = require("./Mysql");

const io = new Server();
const Leer_linea = SerialPort.parsers.Readline;

const Arduino = new SerialPort("/dev/ttyACM0",{baudRate:9600});

const analizador = Arduino.pipe(new Leer_linea({delimiter:"\r\n"}));

const conexion = new Conexion_DB();
conexion.crear_conexion();

analizador.on("data",(data)=>{

    const humedad =`${data}%`;
    
    io.emit("humedad",humedad);
    conexion.registrar_ambiente(humedad)
});
