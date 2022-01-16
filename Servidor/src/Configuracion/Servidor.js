const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const {Rutas} = require("../App/Rutas");
const {crear_conexion_arduino} = require("./Arduino");

const app = express();
const puerto = process.env.PUERTO || 3001;

app.use(cors({
    origin:"*",
    credentials:true,
    rejectUnauthorized:false
}));

app.use(express.urlencoded({extended:false,limit:"50mb", parameterLimit:50000}));
app.use(express.json({limit:"50mb"}));
app.use(Rutas)

const servidor = http.createServer(app);

servidor.listen(puerto,"192.168.100.7",() =>{
    console.log(`ejecutando en el puerto ${puerto}`)
});


const io = socketio(servidor,{origin:"*"});
io.sockets.setMaxListeners(0);

crear_conexion_arduino(io);

