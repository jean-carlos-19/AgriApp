
const conversion_analogica = (dato_analogico)=>{

    const array_dato = new String(dato_analogico).split(" ");
    
    
    const array_porcentual = array_dato.map((dato,i)=>{

        if(i===0) return 100 - (((100 * Number.parseInt(dato)) / 1023).toFixed(0)) 
        
        return dato;
    });
    
    return array_porcentual;
}

module.exports = { conversion_analogica}