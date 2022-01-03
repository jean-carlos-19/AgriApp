require("./Configuracion/Arduino");
const express = require("express");
const {Rutas} = require("./App/Rutas");
const cors = require("cors");


const app = express();
const PUERTO = process.env.PUERTO || 3001;



app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(Rutas)

app.set("puerto",PUERTO);

app.listen(app.get("puerto"),()=>{
   
    console.log(`Servidor corriendo en el puerto ${app.get("puerto")}`);
});