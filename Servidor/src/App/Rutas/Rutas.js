const express = require("express");
const Rutas = express.Router();

Rutas.get("/",(solicitud,respuesta)=>{
    respuesta.send("todo con exito");
});

module.exports = {Rutas};
