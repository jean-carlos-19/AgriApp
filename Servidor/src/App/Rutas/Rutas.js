const express = require("express");
const Rutas = express.Router();
const {Server} = require("socket.io")

const io = new Server();

Rutas.get("/",(solicitud,respuesta)=>{
    respuesta.send("todo con exito");
});

module.exports = {Rutas};
