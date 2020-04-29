//requireds
const argv = require('./config/yarg').argv;
const colors = require('colors/safe');

const { crearArhivo,listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){

    case 'listar':
            listarTabla(argv.base,argv.limite);
        break;

    case 'crear':

        crearArhivo(argv.base,argv.limite)
            .then(archivo=>console.log(`Archivo creado ${archivo}`.green))
            .catch(err=>console.log(err))

        break;

    default:
        console.log('Comando no reconocido');
}









//let base = '5';

//recibir informacion desde la linea de comando
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log('Limite',argv.limite);
//console.log(argv2);
