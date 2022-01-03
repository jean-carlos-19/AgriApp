const mysql = require("mysql2");

class Conexion_DB{

    constructor(){
        this.host = "localhost";
        this.usuario = "root";
        this.contrasena =  "Jeancarlos18.";
        this.base_datos = "karen";
        this.conexion = undefined;
        this.sql_buscar_coe = "select * from coe;";
    }
    crear_conexion(){
        this.conexion = mysql.createPool(this.devolver_configuracion());
    }
    async buscar(){
        try {
            const promisePool = this.conexion.promise();
            const [rows,fields] = await promisePool.query(this.sql_buscar_coe);
            console.log(rows);
        } catch (error) {
            console.log(error);
        }
    }

    registrar_ambiente(data){
        console.log(data);
    }
    devolver_configuracion(){
        return {
            host: this.host,
            user: this.usuario,
            password:this.contrasena,
            database: this.base_datos
        }
    }
}
module.exports = {
    Conexion_DB
}