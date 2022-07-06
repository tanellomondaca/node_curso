
const fs = require('fs');

const crearAcrhivo = (base, hasta) => {
    
    return new Promise( (resolver, rechazar)  => {
        let salida = `=================== Tabla del ${base} ===================\n`;

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
        }

        try {
            fs.writeFileSync("./tablas/tabla-del-"+base+".txt", salida);
            resolver("tabla.txt");
            // console.log(salida);
        } catch (error) {
            rechazar(error);
        };
    });
}

module.exports = {
    crearAcrhivo
}

