// import { crearAcrhivo} from './helpers/multiplicar';
const { number } = require("yargs");
const { crearAcrhivo } = require("./helpers/multiplicar");
//Utilizar yargs
// const yargs = require('yargs/yargs')
const argv = require("yargs")
                .option("b", {
                    alias: "base",
                    demandOption: true,
                    default: 5,
                    type: number
                })
                .option("h", {
                    alias: "hasta",
                    demandOption: true,
                    default: 10,
                    type: number
                }).argv;

console.clear();

// // console.log(process.argv);
// // console.log(argv); // al hacer en la consola 'node app.js --base=5 genera un objeto así { _: [], base: 5, '$0': 'app.js' }
// //y se puede acceder como se llama la propiedad
// console.log("base: ",argv.base); //al hacer --base=5, el resultado de esto es 5
// console.log("hasta: ",argv.hasta); //al hacer --base=5, el resultado de esto es 5

// // const base= 17;

crearAcrhivo(argv.base, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log('Tenemos unn problema',err));

// const factorial = (n) => {
//     let fact;
//     if( n == 1 ){
//         fact = 1;
//     }else{
//         fact = n * factorial(n-1);
//     }

//     return fact;
// }

// console.log( factorial(3) );
